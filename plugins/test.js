AMDI({ cmd: ["analog303"], desc: Lang.AliveDesc, type: "primary", react: "????" }, (async (amdiWA) => {
    let { prefix, sendButtonsMsg } = amdiWA.msgLayout;

    var ALIVE_MSG = await getSettings("ALIVE_MSG");
    if (ALIVE_MSG.input === 'default' || ALIVE_MSG.input == undefined) {
        const buttons = [
            {type: "url", displayText: "???? Official Website", url: 'https://amdaniwasa.com/'},
            {type: "url", displayText: "??? AN Tech YouTube Channel", url: 'https://www.youtube.com/channel/UCZx8U1EU95-Wn9mH4dn15vQ'},
            {type: "click", displayText: Lang.sysStats, buttonCMD: `${prefix}system`},
            {type: "click", displayText: Lang.vercheck, buttonCMD: `${prefix}qaversion`}
        ]
        return await sendButtonsMsg(buttons, {text: aliveTXT0, image: {url: alivePicURL0}, tagMsg: true});
    } else {
        const customMap = ALIVE_MSG.input
        await customAlive(amdiWA.web, customMap, amdiWA.msgLayout, getSettings);
    }
}));
