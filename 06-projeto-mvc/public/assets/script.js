document.querySelectorAll('#delete-form').forEach(element => {
    element.addEventListener('submit', (event)=>  {
         const confirmation = confirm('Tem certeza que deseja deletar este post?');
         if (!confirmation) {
            event.preventDefault();
         }
} )
})
