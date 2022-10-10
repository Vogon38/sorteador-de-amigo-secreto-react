import './estilos.css'

const Cabecalho = () => {
    return (
        <header className="cabecalho">
            <a href='./'>
            <div className="imagem-logo" role="img" aria-label='Logo do Sorteador'></div>
            <img className='participante' src="/images/participante.png" alt="Participante com um presente na mão" />
            </a>
        </header>
    )
}

export default Cabecalho