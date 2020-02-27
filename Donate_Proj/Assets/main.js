/*

=========================================================================
          _ _   _____                    _         _____                 
    /\   | (_) |  __ \                  | |       |  __ \                
   /  \  | |_  | |  | | ___  _ __   __ _| |_ ___  | |__) |_ _  __ _  ___ 
  / /\ \ | | | | |  | |/ _ \| '_ \ / _` | __/ _ \ |  ___/ _` |/ _` |/ _ \
 / ____ \| | | | |__| | (_) | | | | (_| | ||  __/ | |  | (_| | (_| |  __/
/_/    \_\_|_| |_____/ \___/|_| |_|\__,_|\__\___| |_|   \__,_|\__, |\___|
                                                               __/ |     
                                                              |___/      
=========================================================================\
Theme Name : Ali Donate Page
Theme Uri : 
Author : Ali Javadi
Author Uri : https://javadi.ml/
CopyRight © 2020

*/
 // copy text
 function copyText(element) {
      var range, selection, worked;
    
      if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
      } 
      else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      
      try {
        document.execCommand('copy');
         alert("کپی شد !")
        
      }
      catch (err) {
        alert('unable to copy text : ' + err);
      }
 }