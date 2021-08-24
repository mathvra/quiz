import questoes from '../bancoDeQuestoes'

export default function handler (req, res) {
    res.status(200).json(questoes.map(questoes => questoes.id))
}