# Marketing Automation Scripts

> Scripts inteligentes para conectar a tecnologia ao Growth Marketing (Tráfego Pago).

A inteligência de dados é o núcleo da **TAVARDT**. Este repositório centraliza scripts automatizados usados para otimizar campanhas no Google Ads, Meta Ads e integrações via API.

## 🚀 Scripts Disponíveis

### 1. `google-ads/pause-on-404.js`
**Problema:** Anunciantes perdem milhares de reais enviando tráfego pago para Landing Pages que caíram ou retornam erro 404 (Not Found).
**Solução (O Script):** 
Roda a cada hora no nível da conta do Google Ads. Ele varre todas as URLs finais de anúncios ativos. Se a URL retornar um código HTTP 404 ou 500, o script automaticamente **pausa o anúncio** e envia um alerta.

## 🛠️ Como Instalar no Google Ads
1. Acesse Ferramentas e Configurações > Ações em massa > Scripts.
2. Clique no "+" para criar um novo script.
3. Cole o código do arquivo desejado e autorize a execução.
4. Configure a frequência (ex: a cada hora).
