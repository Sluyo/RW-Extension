// Écouteur d'événement pour le téléchargement de fichiers
browser.downloads.onCreated.addListener(function(downloadItem) {
    var downloadId = downloadItem.id;
  
    // Mettre en pause le téléchargement
    browser.downloads.pause(downloadId).then(function() {
      // Obtention des informations sur le fichier téléchargé
      browser.downloads.search({ id: downloadId }, function(results) {
        if (results && results.length > 0) {
          var downloadedFile = results[0];
          var fileName = downloadedFile.filename;
  
          // Affichage du message dans la console
          console.log('Fichier téléchargé : ' + fileName);
  
          // Attente de 2 secondes (2000 millisecondes)
          setTimeout(function() {
            // Reprendre le téléchargement après 2 secondes
            browser.downloads.resume(downloadId);
          }, 2000);
        }
      });
    });
  });
  