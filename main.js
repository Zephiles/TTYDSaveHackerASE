var _a, _b;
function readString(buffer, offs, length) {
    var u = new Uint8Array(buffer);
    var S = '';
    for (var i = 0; i < length; i++)
        S += String.fromCharCode(u[offs + i]);
    return S;
}
function writeBytes(buffer, offs, S) {
    new Uint8Array(buffer).set(new Uint8Array(S), offs);
}
function makeStrBytes(S) {
    var u = new Uint8Array(S.length);
    for (var i = 0; i < S.length; i++)
        u[i] = S.charCodeAt(i);
    return u.buffer;
}
var BinaryDataInit = (_a = {},
    _a["G8MJ01" /* JP */] = "gI2ZwICEACBUhHAiOIRBQICtFjiApQCofYUiFH2JA6ZOgAQg",
    _a["G8MP01" /* EU */] = "gI2bMICEACBUhHAiOIRCYICtHHiApQCofYUiFH2JA6ZOgAQg",
    _a["G8ME01" /* US */] = "gI2asICEACBUhHAiOIRCYICtG5iApQCofYUiFH2JA6ZOgAQg",
    _a);
var BinaryDataMain = (_b = {},
    _b["G8MJ01" /* JP */] = "PGCAKWBjUnA8gHwIYIQCpoCjAAB8BSAAQIIAMEgAAAV8iAKmOIQANEgAASmAbZCwOIAAAZCDEng8YIAGYGPbyHxpA6ZOgAQgkIMAAEgAARlL///clCH/4HwIAqaQAQAkv4EACHx+G3h8nyN4P6CA8D+AgCl/o+t4SAAABXyIAqY4hP+EOKAEDD2AgCZhjD1cfYgDpk6AACF/o+t4OIAEDEgAAMmTrRyIOH0EDJBtHIxjgyJEY6QA4EgAAJljjFJ0fYkDpn/D83h/5Pt4u4EACIABACR8CAOmOCEAIE6ABCB8fxt4PGCBMGBjO7Q8gIDwYIQBAEgAAF1/4/t4SzkhTHx/G3g/wIAAY8NIiDyAgPA4oAQMSzY8SWPDSIg4gAQMSAAASTxggAZgY+vYY8RKQEgAACE8YIApYGNScDyAgABghEjcSAAADX/j+3hIQDpsfIMgUFSEAbo8oEgAfKUjeJCjAAA4gAAElCH/6HwIAqaQAQAcv6EACHx/G3h8niN4P6CAKWOlCjx8qAOmToAAIWOjCyB8aAOmf+P7eH/E83hOgAAhu6EACIABABx8CAOmOCEAGE6AACA/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASCpNNSwD//9AggAMN73//0GB/+QsAwAAQIICADhgAACAjRY4gIQABDigAAA4wAAASCpUDUgAAZEsAwAAQaIAECwD//pBggAISAAB0DhgAAA4gAAASCpLtUgAAW0sAwAAQIIBuDiAABRIAAFVfH0beDhgAABj5Ex8f6XreEgqYwEsAwAAQIIBdDiABABIAAExfHsbeH+j63h/ZNt4OKAEADjAIAA44AAASCpqhUgAARksAwAAQIIBNIDbAEA7hgH/V5wALINbAkiAewJEfBoblnwAGdZ8ANBRQaIAHH9E03h8owDQf0UoOH9FGhR8hNBQfMYiFIM7AiB/BsoUfBjgQECgAAh/mON4f2TbeEgAAKl/BMN4SAAAqXx7G3h/o+t4f2TbeH+F43g4wCIAOOAAAEgqaf1IAACRLAMAAECCAKx/m9IUf2PbeH+E43g4oAABSCj8VSwDAAFAggCIfHrKFDhjAB9UYwA0gJv/6DiE/+A4owBAfAUgAEGBACw4owAgkLv/6HzDIFB8mxoUkMQACD9AgEKDWo6ggHoABEgot/GQegAEk59BTJN/QVCD2wA0SAAAQDhgAABIAq5MOGAAAEgCrnAsAwAATIIAIDyAgEGAZN2ELAP//0GC//hOgAAgf2PbeEgpAP1/ZNt4S///yX+j63hIKmKlf6TreEv//7k4YAAASCpUdSweAABBggAMf8gDpk6AACE4YAAASAafZEFTRV9QcmFjdGljZUNvZGVzTG9hZGVyAA==",
    _b["G8MP01" /* EU */] = "PGCAKWBj8MA8gHwIYIQCpoCjAAB8BSAAQIIAMEgAAAV8iAKmOIQANEgAASmAbZCwOIAAAZCDEng8YIAGYGP/mHxpA6ZOgAQgkIMAAEgAARlL///clCH/4HwIAqaQAQAkv4EACHx+G3h8nyN4P6CA8D+AgCl/o+t4SAAABXyIAqY4hP+EOKAEDD2AgCZhjNsAfYgDpk6AACF/o+t4OIAEDEgAAMmTrSLIOH0EDJBtIsxjg8CUY6QA4EgAAJljjPDEfYkDpn/D83h/5Pt4u4EACIABACR8CAOmOCEAIE6ABCB8fxt4PGCBMGBjO7Q8gIDwYIQBAEgAAF1/4/t4Szm/nHx/G3g/wIAAY8NIiDyAgPA4oAQMSzbZ7WPDSIg4gAQMSAAASTxggAdgYxD0Y8RKQEgAACE8YIApYGPwwDyAgABghEjcSAAADX/j+3hIQDpsfIMgUFSEAbo8oEgAfKUjeJCjAAA4gAAElCH/6HwIAqaQAQAcv6EACHx/G3h8niN4P6CAKWOlqIx8qAOmToAAIWOjqXB8aAOmf+P7eH/E83hOgAAhu6EACIABABx8CAOmOCEAGE6AACA/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASCrrtSwD//9AggAMN73//0GB/+QsAwAAQIICADhgAACAjRx4gIQABDigAAA4wAAASCryjUgAAZEsAwAAQaIAECwD//pBggAISAAB0DhgAAA4gAAASCrqNUgAAW0sAwAAQIIBuDiAABRIAAFVfH0beDhgAABj5Ex8f6XreEgrAYEsAwAAQIIBdDiABABIAAExfHsbeH+j63h/ZNt4OKAEADjAIAA44AAASCsJBUgAARksAwAAQIIBNIDbAEA7hgH/V5wALINbAkiAewJEfBoblnwAGdZ8ANBRQaIAHH9E03h8owDQf0UoOH9FGhR8hNBQfMYiFIM7AiB/BsoUfBjgQECgAAh/mON4f2TbeEgAAKl/BMN4SAAAqXx7G3h/o+t4f2TbeH+F43g4wCIAOOAAAEgrCH1IAACRLAMAAECCAKx/m9IUf2PbeH+E43g4oAABSCmapSwDAAFAggCIfHrKFDhjAB9UYwA0gJv/6DiE/+A4owBAfAUgAEGBACw4owAgkLv/6HzDIFB8mxoUkMQACD9AgEODWrnggHoABEgpVkGQegAEk59BTJN/QVCD2wA0SAAAQDhgAABIArWYOGAAAEgCtbwsAwAATIIAIDyAgEKAZAKELAP//0GC//hOgAAgf2PbeEgpn01/ZNt4S///yX+j63hIKwElf6TreEv//7k4YAAASCry9SweAABBggAMf8gDpk6AACE4YAAASAbEgEFTRV9QcmFjdGljZUNvZGVzTG9hZGVyAA==",
    _b["G8ME01" /* US */] = "PGCAKWBjsHQ8gHwIYIQCpoCjAAB8BSAAQIIAMEgAAAV8iAKmOIQANEgAASmAbZCwOIAAAZCDEng8YIAGYGPtvHxpA6ZOgAQgkIMAAEgAARlL///clCH/4HwIAqaQAQAkv4EACHx+G3h8nyN4P6CA8D+AgCl/o+t4SAAABXyIAqY4hP+EOKAEDD2AgCZhjJ0MfYgDpk6AACF/o+t4OIAEDEgAAMmTrSGYOH0EDJBtIZxjg4BIY6QA4EgAAJljjLB4fYkDpn/D83h/5Pt4u4EACIABACR8CAOmOCEAIE6ABCB8fxt4PGCBMGBjO7Q8gIDwYIQBAEgAAF1/4/t4Szl/UHx/G3g/wIAAY8NIiDyAgPA4oAQMSzab+WPDSIg4gAQMSAAASTxggAZgY/44Y8RKQEgAACE8YIApYGOwdDyAgABghEjcSAAADX/j+3hIQDpsfIMgUFSEAbo8oEgAfKUjeJCjAAA4gAAElCH/6HwIAqaQAQAcv6EACHx/G3h8niN4P6CAKWOlalR8qAOmToAAIWOjawx8aAOmf+P7eH/E83hOgAAhu6EACIABABx8CAOmOCEAGE6AACA/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASCqrOSwD//9AggAMN73//0GB/+QsAwAAQIICADhgAACAjRuYgIQABDigAAA4wAAASCqyEUgAAZEsAwAAQaIAECwD//pBggAISAAB0DhgAAA4gAAASCqpuUgAAW0sAwAAQIIBuDiAABRIAAFVfH0beDhgAABj5Ex8f6XreEgqwQUsAwAAQIIBdDiABABIAAExfHsbeH+j63h/ZNt4OKAEADjAIAA44AAASCrIiUgAARksAwAAQIIBNIDbAEA7hgH/V5wALINbAkiAewJEfBoblnwAGdZ8ANBRQaIAHH9E03h8owDQf0UoOH9FGhR8hNBQfMYiFIM7AiB/BsoUfBjgQECgAAh/mON4f2TbeEgAAKl/BMN4SAAAqXx7G3h/o+t4f2TbeH+F43g4wCIAOOAAAEgqyAFIAACRLAMAAECCAKx/m9IUf2PbeH+E43g4oAABSClaWSwDAAFAggCIfHrKFDhjAB9UYwA0gJv/6DiE/+A4owBAfAUgAEGBACw4owAgkLv/6HzDIFB8mxoUkMQACD9AgEKDWvBwgHoABEgpGAmQegAEk59BTJN/QVCD2wA0SAAAQDhgAABIArSwOGAAAEgCtNQsAwAATIIAIDyAgEGAZDuELAP//0GC//hOgAAgf2PbeEgpXwF/ZNt4S///yX+j63hIKsCpf6TreEv//7k4YAAASCqyeSweAABBggAMf8gDpk6AACE4YAAASAaxxEFTRV9QcmFjdGljZUNvZGVzTG9hZGVyAA==",
    _b);
function decodeBinaryData(S) {
    return Uint8Array.from(window.atob(S), function (c) { return c.charCodeAt(0); }).buffer;
}
function patch(view, fileNumber) {
    var version = readString(view.buffer, 0x00, 0x06);
    var validVersions = ["G8MJ01" /* JP */, "G8ME01" /* US */, "G8MP01" /* EU */];
    if (!validVersions.includes(version))
        return 2 /* WrongSaveFileGameID */;
    var internalFilename = readString(view.buffer, 0x08, 0x11);
    if (internalFilename !== 'mariost_save_file')
        return 3 /* WrongSaveFileInternalName */;
    if (fileNumber < 1 || fileNumber > 4)
        return 4 /* InvalidFileNumber */;
    var offsetFile0 = ((fileNumber - 1) * 0x4000) + 0x2040;
    var offsetFile1 = offsetFile0 + 0x10000;
    function patchFilesU16(offset, value) {
        view.setUint16(offsetFile0 + offset, value, false);
        view.setUint16(offsetFile1 + offset, value, false);
    }
    function patchFilesU32(offset, value) {
        view.setUint32(offsetFile0 + offset, value, false);
        view.setUint32(offsetFile1 + offset, value, false);
    }
    function patchFilesBytes(offset, value) {
        writeBytes(view.buffer, offsetFile0 + offset, value);
        writeBytes(view.buffer, offsetFile1 + offset, value);
    }
    // Write the pointer to the init ASM function.
    if (version === "G8MJ01" /* JP */) {
        patchFilesU32(0x11AC, 0x803D8214);
    }
    else if (version === "G8ME01" /* US */) {
        patchFilesU32(0x3B4, 0x803DBDAC);
    }
    else if (version === "G8MP01" /* EU */) {
        patchFilesU32(0x104, 0x803E7E0C);
    }
    // Write the pointer to the current anim data for the partner.
    if (version === "G8MJ01" /* JP */) {
        // JP doesn't need this pointer.
    }
    else if (version === "G8ME01" /* US */) {
        patchFilesU32(0x3B0, 0x802CB1A8);
    }
    else if (version === "G8MP01" /* EU */) {
        patchFilesU32(0x100, 0x802D6E2C);
    }
    // Make sure the selected file exists.
    patchFilesU16(0x00, 0x00);
    // Write the new file name.
    patchFilesBytes(0x11C4, makeStrBytes('PC ASE Loader\0'));
    // Set the current follower ID.
    if (version === "G8MJ01" /* JP */) {
        patchFilesU32(0x11E8, 0x4F04);
    }
    else {
        patchFilesU32(0x11E8, 0x4F7F);
    }
    // Write the init ASM function.
    if (version === "G8MJ01" /* JP */) {
        patchFilesBytes(0x1184, decodeBinaryData(BinaryDataInit[version]));
    }
    else {
        patchFilesBytes(0x119C, decodeBinaryData(BinaryDataInit[version]));
    }
    // Write the main ASM function.
    if (version === "G8MJ01" /* JP */) {
        patchFilesBytes(0x2140, decodeBinaryData(BinaryDataMain[version]));
    }
    else {
        patchFilesBytes(0x2260, decodeBinaryData(BinaryDataMain[version]));
    }
    var dataFieldSize = (version === "G8MJ01" /* JP */) ? 0x2140 : 0x2260;
    var dataFieldSum = 0;
    for (var i = 0; i < dataFieldSize; i++)
        dataFieldSum = (dataFieldSum + view.getUint8(offsetFile0 + i)) >>> 0;
    // Patch in checksums.
    patchFilesU32(0x3FF8, dataFieldSum);
    patchFilesU32(0x3FFC, (~dataFieldSum) >>> 0);
    return 0 /* Success */;
}
function downloadFile(filename, data) {
    var blob = new Blob([data], { type: 'application/octet-stream' });
    var url = window.URL.createObjectURL(blob);
    var elem = document.createElement('a');
    elem.setAttribute('href', url);
    elem.setAttribute('download', filename);
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
}
function displayResult(e) {
    var errorMessage = document.querySelector('div#errormessage');
    if (e === 0 /* Success */) {
        errorMessage.textContent = '';
        return true;
    }
    else if (e === 1 /* NotSaveFile */) {
        errorMessage.textContent = 'The file you specified is not a valid .gci save file';
        return false;
    }
    else if (e === 2 /* WrongSaveFileGameID */) {
        errorMessage.textContent = 'This save file is not for Paper Mario: The Thousand Year Door';
        return false;
    }
    else if (e === 3 /* WrongSaveFileInternalName */) {
        errorMessage.textContent = 'This save file has the wrong internal ID. Please make sure you are using a normal Paper Mario: The Thousand Year Door save file.';
        return false;
    }
    else if (e === 4 /* InvalidFileNumber */) {
        // should not happen
        throw "Invalid file number.";
    }
}
function fileSubmitted() {
    var input = document.querySelector('input#fileupload');
    var file = input.files[0];
    if (!file.name.endsWith('.gci')) {
        if (!displayResult(1 /* NotSaveFile */))
            return;
    }
    var fileNumberInput = document.querySelector('select#filenumber');
    var fileNumber = Number(fileNumberInput.selectedOptions[0].textContent);
    var outputFilename = file.name.replace(/\..*$/, '') + "_PC_ASE_Loader.gci";
    var reader = new FileReader();
    reader.onload = function () {
        var buffer = reader.result;
        var view = new DataView(buffer);
        var res = patch(view, fileNumber);
        if (!displayResult(res))
            return;
        downloadFile(outputFilename, buffer);
    };
    reader.readAsArrayBuffer(file);
}
function main() {
    var form = document.querySelector('form#uploadform');
    form.onsubmit = function (e) {
        fileSubmitted();
        return false;
    };
}
window.onload = function () {
    main();
};