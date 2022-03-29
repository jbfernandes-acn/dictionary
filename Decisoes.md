
# Decisões tomadas
Este documento enumera algumas decisões tomadas na construção do projeto, com respetivas justificações.


## Nomenclatura de ficheiros
Inicialmente, comecei por chamar "index.jsx" aos ficheiros que definem componentes. 
No entanto, rapidamente adoptei outra estratégia, chamando a cada ficheiro o nome do componente que define (ex: "Main.jsx"), pois era difícil distinguir os ficheiros de componentes que estavam abertos no IDE, já que todos tinham o mesmo nome ("index.jsx").


## Estado de componentes
Criei um componente que consiste numa barra de pesquisa e um botão para submissão. Inicialmente, mantive o estado (o texto da barra de pesquisa) no componente que o utiliza, passando-o como props ao componente de pesquisa, bem como uma função para gerir as alterações, de forma a que o pai pudesse ser notificado. No entanto, verifiquei que sempre que quiser utilizar o componente de pesquisa, tenho que declarar uma função de atualização do estado no pai. Visto que, no meu cenário de utilização da pesquisa, o pai não necessita de ser notificado de cada alteração ao texto da barra de pesquisa, mas apenas lhe interessa ser notificado da submissão, passei a função de gestão de alterações do texto para dentro do componente de pesquisa, que mantém o seu próprio estado. No momento da submissão da pesquisa, o pai é notificado através da função passada como props.

## Chamadas a API (neste caso foi com localStorage, mas podia ser uma API remota)
A lista de favoritos é apresentada na página de favoritos. No entanto, esta lista também é necessária na página de detalhe de uma palavra. Visto que a lista tem que ser acedida em diversos componentes de páginas diferentes, coloquei a instrução de dispatch da ação de obtenção da lista de favoritos no componente App. Desta forma, independentemente da página pela qual se "entre" na aplicação, teremos sempre acesso à lista de favoritos.

