export const enviarForm = async (payload) => {
  const url = 'https://formulario.epack.pe/public/graphql'
  const req = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      mutation CreateRegistroFormulario($input:RegistroFormularioInput!){
        CreateRegistroFormulario(input:$input){
          email
          nombres
          mensaje
          nroCelular
          dispositivo
          formularioId
          sistemaOperativo
        }
      }`,
      variables: { input: payload }
    })
  })
  return req.json()
}
