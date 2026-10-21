# Bookafé (Comanda)

Calculadora de comanda do Bookafé: tem campo de data e registra os pagamentos de cada conta, sem taxa de serviço. Em "Pagamentos", cada linha tem o valor e a forma de pagamento (PIX, débito, crédito ou dinheiro); pagamento sem valor fica com uma parte igual do que falta. O app mostra quanto cada um paga (com nome opcional), o total por forma de pagamento, o total geral e se falta pagar ou há troco. O botão "Finalizar e copiar para a planilha" copia uma linha por pagamento (data, comanda, total, pessoa, forma, valor pago) para colar numa planilha diária do Excel, salva uma cópia da comanda em CSV na pasta escolhida (Chrome no computador; sem pasta, vai para Downloads) e abre uma comanda nova. Tem campo para a chave Pix e botão que copia a mensagem de cobrança. Autoteste: abra com `?teste` no fim do endereço.

Página única (HTML, CSS e JavaScript no mesmo arquivo). Não precisa instalar nada: baixe o `index.html` e abra com duplo clique no navegador.

Feito em português do Brasil, valores em reais.
