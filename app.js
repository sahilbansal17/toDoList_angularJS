angular.module("chatApp",[])
.controller("toDoCtrl",ctrlFun)

function ctrlFun(){
    //console.log("Controller loaded.");
    var TODO = this;
    TODO.tasks = [];
    TODO.updateMode = 0;
    TODO.updateIndex;
    function addItem(task){
        var obj={};
        obj.text = task;
        obj.status = false; //not completed
        obj.time = new Date();
        obj.editMode = 0;
        obj.updateTime = 0;
        if(obj.text){
            TODO.tasks.push(obj);
        } //it will consider text='0' as string
        console.log(TODO.tasks);
        TODO.name="";
    }
    function remove(index){
        TODO.tasks.splice(index,1);
    }

    function taskCompleted(index){
        TODO.tasks[index].status = true;
    }

    function undoTask(index){
        TODO.tasks[index].status = false;
    }
    function updateTask(index){ //called when edit button is clicked
        if(TODO.updateMode==0){ //if not already in update mode
            TODO.updateIndex = index;
            TODO.name = TODO.tasks[index].text;
            TODO.tasks[index].editMode = 1;
            TODO.updateMode = 1;
        }
    }

    function update(){ //called when update button is clicked
        TODO.tasks[TODO.updateIndex].text = TODO.name;
        TODO.tasks[TODO.updateIndex].editMode = 0;
        TODO.tasks[TODO.updateIndex].updateTime = new Date();
        TODO.updateMode = 0;
        console.log(TODO.tasks);
        TODO.name = "";
    }

    function up(index){
        var temp = TODO.tasks[index-1];
        TODO.tasks[index-1] = TODO.tasks[index];
        TODO.tasks[index]=temp;
        console.log(TODO.tasks);
    }

    function down(index){
        var temp = TODO.tasks[index];
        TODO.tasks[index] = TODO.tasks[index+1];
        TODO.tasks[index+1]=temp;
        console.log(TODO.tasks);
    }
    TODO.add = addItem;
    TODO.remove = remove;
    TODO.taskCompleted = taskCompleted;
    TODO.update = updateTask;
    TODO.updateTask = update;
    TODO.undoTask = undoTask;
    TODO.moveUp = up;
    TODO.moveDown = down;
    //console.log(this.name);
    //var name = 'hi'; //cannot pass this local variable to the HTML

    //1. editing a task, 2. after clicking done, there should be some undo button, 3. moving up or down the items in list
    //set focus to input box while editing 
    //should be able to use enter to add a task
}

focusMethod = function getFocus() {           
    document.getElementById("getTask").focus();
}