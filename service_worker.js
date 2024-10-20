chrome.commands.onCommand.addListener(function(command) {

   if (command === "close-other-tabs-dp") {
      chrome.tabs.query({lastFocusedWindow: true, pinned:false}, tabs => {
         let activeIndex = 0;
         for (const tab of tabs) {
            if (tab.active) {
               activeIndex = tab.index;
            }
         }
         let otherTabs = tabs.filter(t => t.index != activeIndex);
         chrome.tabs.remove(otherTabs.map (t => t.id));
      });
   }
   else if (command === "close-left-tabs-dp") {
      chrome.tabs.query({lastFocusedWindow:true, pinned: false}, tabs => {
         let activeIndex = 0;
         for (const tab of tabs) {
            if (tab.active) {
               activeIndex = tab.index;
            }
         }
         let leftTabs = tabs.filter(t => t.index < activeIndex);
         chrome.tabs.remove(leftTabs.map(t=> t.id));        
      });
   }
   else if (command === "close-right-tabs-dp") {
      chrome.tabs.query({lastFocusedWindow: true, pinned: false }, tabs => {
         let activeIndex = 0;
         for (const tab of tabs) {
            if (tab.active) {
               activeIndex = tab.index;
            }
         }
         let rightTabs = tabs.filter(t => t.index > activeIndex);
         chrome.tabs.remove(rightTabs.map(t => t.id));
      });
   }
   else if (command === "toggle-pin-dp") {
      chrome.tabs.query({lastFocusedWindow: true, active: true}, tabs => {
         chrome.tabs.update(tabs[0].id, {
            'pinned': !tabs[0].pinned
         });
      });
   }
});
