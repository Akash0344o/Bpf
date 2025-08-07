 const currentPage = location.pathname.split('/').pop();
        document.querySelector(`a[href="${currentPage}"]`).classList.add('active');

      function acceptCookies() {
        document.getElementById('cookie-banner').style.display = 'none';
        localStorage.setItem('cookieAccepted', 'true');
      }
      // Add reject option
        function rejectCookies() {
            localStorage.setItem('cookieRejected', 'true');
            document.getElementById('cookie-banner').style.display = 'none';
        }
      window.onload = () => {
        if (!localStorage.getItem('cookieAccepted')) {
          document.getElementById('cookie-banner').style.display = 'flex';
        }
      };