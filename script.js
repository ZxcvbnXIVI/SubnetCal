function openTab(tabId) {
    var tabs = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    var selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = "block";
    }
}
csubnet = '8'
function setSubnetV(inval) {
    csubnet = inval;
    return false;
}

function popSubnet(inval) {
    var lowerlimit = 0;
    if (inval == 'a') lowerlimit = 8;
    if (inval == 'b') lowerlimit = 16;
    if (inval == 'c') lowerlimit = 24;

    var allSubnets = [[32, '255.255.255.255 /32'], [31, '255.255.255.254 /31'], [30, '255.255.255.252 /30'], [29, '255.255.255.248 /29'], [28, '255.255.255.240 /28'], [27, '255.255.255.224 /27'], [26, '255.255.255.192 /26'], [25, '255.255.255.128 /25'], [24, '255.255.255.0 /24'], [23, '255.255.254.0 /23'], [22, '255.255.252.0 /22'], [21, '255.255.248.0 /21'], [20, '255.255.240.0 /20'], [19, '255.255.224.0 /19'], [18, '255.255.192.0 /18'], [17, '255.255.128.0 /17'], [16, '255.255.0.0 /16'], [15, '255.254.0.0 /15'], [14, '255.252.0.0 /14'], [13, '255.248.0.0 /13'], [12, '255.240.0.0 /12'], [11, '255.224.0.0 /11'], [10, '255.192.0.0 /10'], [9, '255.128.0.0 /9'], [8, '255.0.0.0 /8']];
    var thisSelect = document.getElementById('csubnet');
    thisSelect.options.length = 0;
    for (i = 0; i < allSubnets.length; i++) {
        if (allSubnets[i][0] >= lowerlimit) {
            var thisOption = document.createElement('option');
            thisOption.value = allSubnets[i][0];
            thisOption.innerHTML = allSubnets[i][1];
            if (csubnet == allSubnets[i][0]) thisOption.selected = true;
            thisSelect.appendChild(thisOption);
        }

    }
}
popSubnet('any');