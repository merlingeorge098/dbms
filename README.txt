WDL Question Bank Complete Working Code

1) Q01 to Q09 use HTML, CSS, JS, jQuery/jQuery UI.
2) Q10 to Q19 are PHP + MySQL projects. Each folder has its own database.sql and config.php.
3) Q20 to Q29 use AJAX/DOM as required. Some use PHP files to act as simple backend APIs.

How to run normal HTML questions:
- Open index.html directly in browser.

How to run PHP/AJAX questions correctly:
- Copy the full WDL_Question_Bank_Complete_Working_Code folder to C:\xampp\htdocs\
- Start Apache and MySQL from XAMPP Control Panel.
- For Q10-Q19, open phpMyAdmin and import database.sql from that question folder.
- Open http://localhost/WDL_Question_Bank_Complete_Working_Code/Q10/index.php
- Replace Q10 with the folder number you want.

Why some AJAX questions should run in localhost:
- Browser security can block AJAX when opened directly as file:///.
- Running through XAMPP avoids that issue.
