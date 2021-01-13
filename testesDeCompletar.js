function completarNumero2(valorCampo1) {
    var valorNocampo2 = document.querySelector("#valor2");
    var cid_opts = document.createElement('option');
    switch (valorCampo1) {
        case 0:
            cid_opts.setAttribute('value', cidade)
            cid_opts.innerHTML = cidade;
            cidade_select.appendChild(cs);
                break;
        case 1:
            subtrairValores(s1,s2);
            break;
        case 2:
            dividirValores(s1,s2);
            break;
        case 3:
            multiplicarValores(s1,s2);
            break;
        default:
    }
    }

    if (indiceDaCidade != -1) {

        // aqui eu percorro todas as cidades e crio os OPTIONS
        cidadesPorEstado.estados[indiceDaCidade].cidades.forEach(function (cidade) {
            var cid_opts = document.createElement('option');
            cid_opts.setAttribute('value', cidade)
            cid_opts.innerHTML = cidade;
            cidade_select.appendChild(cid_opts);
        });
    } else {
        document.querySelector("#cidade").innerHTML = '';
    }
}