(function(){
    
    // let form = document.getElementById('projecto');
    // let add_image = document.getElementById("add_file");
    // let rem_image = document.getElementById("remove_file");
    // let e = document.getElementsByName("file")[0];
    
    let novo = document.getElementById('novo');
    let all = document.getElementById('all');

    let del = document.getElementsByName('delete');
        del.forEach((e) => {
            
            e.addEventListener('click', (me) => {
                window.location.href = `deleteProjecto/${me.target.dataset.id}`
                console.log(me.target.dataset.id);
            });
        })
        


    novo.onclick = (e) => {
        let me = e.target;
        // alert("You clicked ME!");
        window.location.href = "/createProjecto"
    }
    // console.log("Started");

    all.onclick = (e) => {
        let me = e.target;
        window.location.href = "/";
    }

    let Projectos = new Array();

    handleProjectos = (e) => {
        // let data = ea;
        console.log("INSIDE");
        console.log(e);
    }

})();