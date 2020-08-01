import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    /**
     * ! Este Destructuring não funcionou para mim!!!!!!
     * ! Não entendo por que!!!!!
     */
    // const { getAttribute, value } = infosDoEvento.target;
    // setValue(getAttribute('name'), value);
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );

    // console.log('[values]', values);
    // console.log('[InfosDoEvento]', infosDoEvento.target.value);
    // setValues(infosDoEvento.target.value);
  }
  // console.log('[nomeDaCategoria]', nomeDaCategoria);

  useEffect(() => {
    //console.log('o que queremos que aconteça')

    const URL_TOP = 'http://localhost:3001/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

    /**
     * 
     * * Passar esse código no console do navegador para entender como 
     * * funcionam as promises.
     * 
     * fetch('http://localhost:3001/categorias')
     * .then((respostaDoServidor) => {
     *    return respostaDoServidor.json();
     * })
     * .then((respostaConvertidaEmObjeto) => {
     *    console.log(respostaConvertidaEmObjeto); 
     * })
     * 
     * * Que é o mesmo que o código assincrono abaixo
     * fetch('http://localhost:3001/categorias')
     * .then(async (respostaDoServidor) => {
     *    const resposta = await respostaDoServidor.json();
     *    console.log(resposta); 
     * })
     * 
     */




    //   setTimeout(() => {
    //     setCategorias([
    //       ...categorias,
    //       {
    //         "id": 1,
    //         "nome": "Front End",
    //         "descricao": "Uma categoria",
    //         "cor": "#cbd1ff"
    //       },
    //       {
    //         "id": 2,
    //         "nome": "Back End",
    //         "descricao": "Outra categoria",
    //         "cor": "#cbd1ff"
    //       },

    //     ]);

    //   }, 4 * 1000)
  }, [
    //   //values.nome,
  ]
  )


  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form
        // style={{ background: values }}
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          // console.log('voce tentou enviar o form');
          setCategorias([...categorias, values]);

          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        {/* Esse código foi todo para FormField  */}
        {/* State
        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              name="nome"
              value={values.nome}
              onChange={
                handleChange
                // !Essa função mudou para handleChange
                //   function funcaoHandlerQueOErroPediu(infosDoEvento) {
                //   //console.log('[values]', values);
                //   //console.log('[InfosDoEvento]', infosDoEvento.target.value);
                //   //setValues(infosDoEvento.target.value);
                //   setValue(
                //     infosDoEvento.target.getAttribute('name'),
                //     infosDoEvento.target.value
                //   );
                // }
              }
            />
          </label>
        </div> */}

        <FormField
          label="Descrição"
          type="textarea" // mudar para textarea
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              name="cor"
              value={values.cor}
              onChange={handleChange}
            />
          </label>
        </div> */}

        <Button>
          Cadastrar
        </Button>

      </form>

      {categorias.lenght === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria.nome}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
