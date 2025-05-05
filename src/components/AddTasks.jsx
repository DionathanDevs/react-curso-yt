function AddTask(){

    return (
    <div className="bg-slate-200 rounded shadow space-y-4 p-6 flex flex-col ">
        <input className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" type="text" placeholder="Digite o título da tarefa" />
        <input className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" type="text" placeholder="Digite a descrição da tarefa" />
        <button className="bg-slate-500 text-white px-4 py-2 font-medium rounded-md">Adicionar</button>
    </div>
   )
}

export default AddTask