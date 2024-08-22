document.addEventListener('DOMContentLoaded', () =>
     {
    const draggables = document.querySelectorAll('.draggable');   //elements haru  lai select garne
    const dropzone = document.getElementById('dropzone');

    draggables.forEach( draggable =>    //forEach loop le ek ek ota draggable lai select garne.
        {
        draggable.addEventListener('dragstart', (e) => {  //dragstartt le item lai drag garna dinxa.
            e.dataTransfer.setData('text', e.target.id);  // drag start vaye paxi, event le,  it sets the ID of the dragged element in
                                                          // the data transfer object.
        });
    });

    dropzone.addEventListener('dragover', (e) =>  
    {
        e.preventDefault();   // this prevents the default behavior to allow dropping.
    });

    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text');
        const draggable = document.getElementById(id); // this  will retrieve the id of the dragged item from the data transfer object.
        dropzone.appendChild(draggable);  //this appends the dragged item to the drop zone.
    });
}
);
