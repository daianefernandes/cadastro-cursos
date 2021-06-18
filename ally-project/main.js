
const cadastrarCurso = (evento) => {

    // evento.preventDefault()
    var nomeCurso = document.querySelector('[data-form-curso]');
    var dataInicio = document.querySelector('[data-form-dataInicio]');
    var dataFim = document.querySelector('[data-form-dataFim]');
    var duracao = document.querySelector('[data-form-duracao]');
    var descricao = document.querySelector('[data-form-descricao]');

    var curso = JSON.parse(localStorage.getItem("dadosDoCurso"));

    if(curso == null) {
        localStorage.setItem("dadosDoCurso", "[]");
        curso = [];
    }

    var dados = {
        name: nomeCurso.value,
        dataBegin: dataInicio.value,
        dataEnd: dataFim.value,
        duration: duracao.value,
        description: descricao.value
    }

    curso.push(dados);

    localStorage.setItem("dadosDoCurso", JSON.stringify(curso));
    //alert("Curso incluído com sucesso!");
}