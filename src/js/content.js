(function(){
    var methods = {
        init: function() {
            let isGooglePage = function () {
                return window.location.href.indexOf('https://www.google.com') === 0;
            };

            if(isGooglePage()) {
                methods.injectSearchBtnToGooglePage()
            }
        },
        injectSearchBtnToGooglePage: function () {
            let btn = document.createElement('div');
            btn.className = 'ddg-search-btn';
            btn.innerHTML = '<span class="HPVvwb"></span>';
            let container = document.querySelector('.dRYYxd');
            btn.addEventListener('click', methods.openDuckDuckGoPage , false);
            container.appendChild(btn);
        },
        openDuckDuckGoPage: function (){
            let searchStr = document.querySelector('input.gLFyf').value;
            // Open in new window case
            // window.open('https://duckduckgo.com/?q=' + encodeURIComponent(searchStr));
            window.location.href = 'https://duckduckgo.com/?q=' + encodeURIComponent(searchStr)
        }
    };

    methods.init();
})();