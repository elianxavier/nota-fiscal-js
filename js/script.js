function putValue(myClass, value) {
    var elementos = document.getElementsByClassName("xml-" + myClass);
    Array.from(elementos).map(function (elemento) {
        elemento.textContent = value;
    });
}

const xmlUrl = 'base/nfe.xml';

function preencherTags(xmlDoc) {

    // Valores da nota
    putValue("numero-nfe", xmlDoc.querySelector("ide > nNF").innerHTML);
    putValue("numero-serie", xmlDoc.querySelector("ide > serie").innerHTML);
    putValue("tipo-de-operacao", xmlDoc.querySelector("ide > tpNF").innerHTML);
    putValue("natureza-da-operacao", xmlDoc.querySelector("ide > natOp").innerHTML);
    putValue("data-emissao", xmlDoc.querySelector("ide > dEmi").innerHTML);

    // Valores do emitente
    putValue("emitente-nome", xmlDoc.querySelector("emit > xNome").innerHTML);
    putValue("emitente-rua", xmlDoc.querySelector("emit > enderEmit > xLgr").innerHTML);
    putValue("emitente-bairro", xmlDoc.querySelector("emit > enderEmit > xBairro").innerHTML);
    putValue("emitente-cep", xmlDoc.querySelector("emit > enderEmit > CEP").innerHTML);
    putValue("emitente-numero", xmlDoc.querySelector("emit > enderEmit > nro").innerHTML);
    putValue("emitente-cidade", xmlDoc.querySelector("emit > enderEmit > xMun").innerHTML);
    putValue("emitente-uf", xmlDoc.querySelector("emit > enderEmit > UF").innerHTML);
    putValue("emitente-fone", xmlDoc.querySelector("emit > enderEmit > fone").innerHTML);
    putValue("emitente-inscricao-estadual", xmlDoc.querySelector("emit > IE").innerHTML);
    putValue("emitente-cnpj", xmlDoc.querySelector("emit > CNPJ").innerHTML);

    // Valores do destinatario
    putValue("destinatario-nome", xmlDoc.querySelector("dest > xNome").innerHTML);
    putValue("destinatario-rua", xmlDoc.querySelector("dest > enderDest > xLgr").innerHTML);
    putValue("destinatario-bairro", xmlDoc.querySelector("dest > enderDest > xBairro").innerHTML);
    putValue("destinatario-cep", xmlDoc.querySelector("dest > enderDest > CEP").innerHTML);
    putValue("destinatario-numero", xmlDoc.querySelector("dest > enderDest > nro").innerHTML);
    putValue("destinatario-cidade", xmlDoc.querySelector("dest > enderDest > xMun").innerHTML);
    putValue("destinatario-uf", xmlDoc.querySelector("dest > enderDest > UF").innerHTML);
    putValue("destinatario-fone", xmlDoc.querySelector("dest > enderDest > fone").innerHTML);
    putValue("destinatario-cnpj", xmlDoc.querySelector("dest > CNPJ").innerHTML);

    // Valores do ICMS
    putValue("imposto-icms-base", xmlDoc.querySelector("total > ICMSTot > vBC").innerHTML);
    putValue("imposto-icms-valor", xmlDoc.querySelector("total > ICMSTot > vICMS").innerHTML);
    putValue("imposto-icms-base-subst-trib", xmlDoc.querySelector("total > ICMSTot > vBCST").innerHTML);
    putValue("imposto-icms-valor-subst-trib", xmlDoc.querySelector("total > ICMSTot > vST").innerHTML);

    // Valores de outras despesas
    putValue("frete-valor", xmlDoc.querySelector("total > ICMSTot > vFrete").innerHTML);
    putValue("produtos-valor-total", xmlDoc.querySelector("total > ICMSTot > vProd").innerHTML);
    putValue("seguro-valor-total", xmlDoc.querySelector("total > ICMSTot > vSeg").innerHTML);
    putValue("desconto-valor-total", xmlDoc.querySelector("total > ICMSTot > vDesc").innerHTML);
    putValue("outras-despesas", xmlDoc.querySelector("total > ICMSTot > vOutro").innerHTML);
    putValue("ipi-valor-total", xmlDoc.querySelector("total > ICMSTot > vIPI").innerHTML);

    // Valor total da nota
    putValue("nota-valor-total", xmlDoc.querySelector("total > ICMSTot > vNF").innerHTML);

    // Valores dos produtos
    putValue("produto-codigo", xmlDoc.querySelector("det > prod > cProd").innerHTML);
    putValue("produto-descricao", xmlDoc.querySelector("det > prod > xProd").innerHTML);
    putValue("produto-cst", xmlDoc.querySelector("imposto > ICMS > ICMS00 > CST").innerHTML);
    putValue("produto-cfop", xmlDoc.querySelector("det > prod > CFOP").innerHTML);
    putValue("produto-unidade", xmlDoc.querySelector("det > prod > uCom").innerHTML);
    putValue("produto-quantidade", xmlDoc.querySelector("det > prod > qCom").innerHTML);
    putValue("produto-valor-unidade", xmlDoc.querySelector("det > prod > vUnCom").innerHTML);
    putValue("produto-valor-total", xmlDoc.querySelector("det > prod > vProd").innerHTML);

    putValue("produto-icms-valor-base", xmlDoc.querySelector("imposto > ICMS > ICMS00 > vBC").innerHTML);
    putValue("produto-icms-valor-total", xmlDoc.querySelector("imposto > ICMS > ICMS00 > vICMS").innerHTML);

    putValue("produto-icms-aliquota", xmlDoc.querySelector("imposto > ICMS > ICMS00 > pICMS").innerHTML);
}

function carregarXML() {
    fetch(xmlUrl)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");
            preencherTags(xmlDoc);
        })
        .catch(error => {
            console.error('Erro ao buscar o arquivo XML:', error);
        });
}

carregarXML();