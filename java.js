<script>
    function showPage(pageId) {
        var pages = document.querySelectorAll('.content');
        for (var i = 0; i < pages.length; i++) {
            if (pages[i].id === pageId) {
                pages[i].style.display = 'block';
            } else {
                pages[i].style.display = 'none';
            }
        }
    }
</script>
