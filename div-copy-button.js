document.getElementById('copyButton').addEventListener('click', function() {
            var text = document.getElementById('textToCopy').innerText;
            
            var textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        });
