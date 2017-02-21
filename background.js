chrome.commands.onCommand.addListener(function(command) {
   if (command == "close-other-tabs-dp") {
      chrome.windows.getCurrent(function(currentWindow) {
         chrome.tabs.query({
            active: false,
            pinned: false,
            windowId: currentWindow.id
         }, function(tabs) {
            var tabIds = new Array(tabs.length);
            for(var i = 0; i < tabs.length; i++){
               tabIds[i] = tabs[i].id;
            }
            chrome.tabs.remove(tabIds);
         });
      });
   } else if (command == "close-right-tabs-dp") {
      chrome.windows.getCurrent(function(currentWindow) {
         chrome.tabs.getSelected(null, function(tab) {
            var index = tab.index;
            chrome.tabs.query({
               active: false,
               pinned: false,
               windowId: currentWindow.id
            }, function(tabs) {
               var tabIds = new Array(tabs.length);
               var count = 0;
               for (var i = 0; i < tabs.length; i++){
                  if (tabs[i].index > index) {
                     tabIds[count] = tabs[i].id;
                     count++;
                  }
               }
               var trimmed = new Array(count);
               for (var i = 0; i < count; i++){
                  trimmed[i] = tabIds[i];
               }
               chrome.tabs.remove(trimmed);
            });
         });
      });
   } else if (command == "toggle-pin-dp") {
      chrome.tabs.getSelected(null, function(tab) {
         chrome.tabs.update(tab.id, {
            'pinned': !tab.pinned
         });
      });
   } else if (command == "close-left-tabs-dp") {
      chrome.tabs.getSelected(null, function(tab) {
         var index = tab.index;
         chrome.tabs.getAllInWindow(null, function(tabs) {
            for (var i = 0; i < index; i++) {
               chrome.tabs.remove(tabs[i].id);
            }
         });
      });     
   }
});