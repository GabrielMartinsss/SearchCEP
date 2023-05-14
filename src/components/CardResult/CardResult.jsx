import './cardResult.css'

export default function CardResult({ cep }) {

    return (
        <div className="cardResult__container">
            <h2> <strong>  CEP: </strong> {cep.cep}</h2>
            <span> <strong>  Logradouro: </strong> {cep.logradouro}</span>
            <span> <strong>  Complemento: </strong> {cep.complemento}</span>
            <span> <strong>  Bairro: </strong> {cep.bairro}</span>
            <span>{cep.localidade} - {cep.uf}</span>
        </div>
    )
}