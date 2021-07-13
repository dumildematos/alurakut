import React, { useState } from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import ListAvatar from '../src/components/ListAvatar';
function ProfileSidebar(propriedades) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      < hr />
      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`} target="_blank">
          @{propriedades.githubUser}
        </a>
      </p>
      < hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home(props) {
  
  const usuarioAleatorio = 'dumildematos';
  const pessoasFavoritas = [
    { 
      id: new Date().toISOString(),
      title: 'juunegreiros',
      image: 'https://github.com/juunegreiros.png',
      url: 'https://github.com/juunegreiros'
    },
    {
      id: new Date().toISOString(),
      title: 'omariosouto',
      image: 'https://github.com/omariosouto.png',
      url: 'https://github.com/omariosouto'
    },
    {
      id: new Date().toISOString(),
      title: 'peas',
      image: 'https://github.com/peas.png',
      url: 'https://github.com/peas'
    },
    {
      id: new Date().toISOString(),
      title: 'rafaballerini',
      image: 'https://github.com/rafaballerini.png',
      url: 'https://github.com/rafaballerini'
    },
    {
      id: new Date().toISOString(),
      title: 'marcobrunodev',
      image: 'https://github.com/marcobrunodev.png',
      url: 'https://github.com/marcobrunodev'
    }, 
    {
      id: new Date().toISOString(),
      title: 'felipefialho',
      image: 'https://github.com/felipefialho.png',
      url: 'https://github.com/felipefialho'
    }
  ];
  const [comunidades, setComunidades] = React.useState([{
    id: 1,
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
    url: ''
  }]);

  function handleCriarComunidade (e){
    e.preventDefault();
    const dadosForm = new FormData(e.target);
   
    const comunidade = {
      id: new Date().toISOString(),
      title: dadosForm.get('title'),
      image: dadosForm.get('image'),
      url: dadosForm.get('urlComunity')
    }
    if(dadosForm.get('title')  != '' &&  dadosForm.get('image') != '' && dadosForm.get('urlComunity') != ''){
      setComunidades([...comunidades, comunidade])
    }
    //e.target.reset();
  }

  return (
    <>
      <AlurakutMenu theme={props.theme} githubUser={usuarioAleatorio} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box theme={props.theme} >
            <h1 className="title">
              Bem vindo(a) 
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={handleCriarComunidade}>
              <div>
                <input 
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  area-label="Qual vai ser o nome da sua comunidade?"
                />
              </div>
              <div className="row">
                <input
                  placeholder="Endereço url da comunidade"
                  type="url"
                  name="urlComunity"
                  area-label="Endereço url da comunidade"
                />
                <input 
                  placeholder="Insira uma URL para imagem de capa!"
                  name="image"
                  area-label="Insira uma URL para imagem de capa!"
                />
              </div>
              <button>
                Criar Comunidade
              </button>
              <button type="reset" className="resetForm">
                Limpar
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          
          <ProfileRelationsBoxWrapper theme={props.theme}>
            
            <ListAvatar title={`Comunidades`} list={comunidades} />
            
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper theme={props.theme}>

            <ListAvatar title={`Pessoas da comunidade `} list={pessoasFavoritas} />
            
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}