type SaveTaskProp = 
{
    saveTask: any,
    loadTask: any,
}

const SaveTask = (taskProps: SaveTaskProp) => {
    const handleSaveTask = (e: any) =>{
        e.preventDefault();
        taskProps.saveTask();
    }

    const handleLoadTask = (e: any) =>{
        e.preventDefault();
        taskProps.loadTask();
    }

    return (
        <div>
            <button id='btnSaveTask' onClick={(e) => handleSaveTask(e)}>Save</button>
            <button id='btnLoadTask' onClick={(e) => handleLoadTask(e)}>Load</button>
        </div>
    );
}

export default SaveTask;