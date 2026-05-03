/**
 * TAVARDT Elite Automation
 * Pause Ads on 404 Error
 * 
 * Este script varre todos os anúncios ativos na conta e verifica o status HTTP da URL Final.
 * Se retornar 404 ou 5xx, ele pausa o anúncio para evitar desperdício de orçamento.
 */

function main() {
  Logger.log("Iniciando auditoria de URLs da TAVARDT...");

  // Busca todos os anúncios habilitados em campanhas habilitadas
  var adSelector = AdsApp.ads()
      .withCondition("CampaignStatus = ENABLED")
      .withCondition("AdGroupStatus = ENABLED")
      .withCondition("Status = ENABLED");

  var adIterator = adSelector.get();
  var errorsFound = 0;

  while (adIterator.hasNext()) {
    var ad = adIterator.next();
    var url = ad.urls().getFinalUrl();

    if (url) {
      try {
        var response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
        var responseCode = response.getResponseCode();

        if (responseCode >= 400) {
          Logger.log("🚨 ALERTA: URL retornou " + responseCode + " - " + url);
          ad.pause();
          Logger.log("✅ Anúncio Pausado com sucesso.");
          errorsFound++;
        }
      } catch (e) {
        Logger.log("❌ Erro ao acessar URL: " + url + " | Erro: " + e.message);
      }
    }
  }

  Logger.log("Auditoria finalizada. Total de anúncios problemáticos pausados: " + errorsFound);
}
