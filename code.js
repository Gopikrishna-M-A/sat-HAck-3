"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function reduceOpacity(rgb, opacity) {
    const r = rgb.r / 255; // Convert R value to decimal
    const g = rgb.g / 255; // Convert G value to decimal
    const b = rgb.b / 255; // Convert B value to decimal
    // Calculate the reduced opacity color
    const reducedOpacityColor = {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255),
    };
    // Add the opacity to the result
    reducedOpacityColor.a = opacity;
    console.log(reducedOpacityColor);
    return reducedOpacityColor;
}
function hexToRGB(hex) {
    // Remove the "#" symbol (if present) and split the hex string into three parts: R, G, and B
    const hexValue = hex.replace("#", "");
    const rHex = hexValue.substr(0, 2);
    const gHex = hexValue.substr(2, 2);
    const bHex = hexValue.substr(4, 2);
    // Convert the hexadecimal values to decimal integers
    const rDecimal = parseInt(rHex, 16);
    const gDecimal = parseInt(gHex, 16);
    const bDecimal = parseInt(bHex, 16);
    // Normalize the RGB values to be between 0 and 1
    const rNormalized = rDecimal / 255;
    const gNormalized = gDecimal / 255;
    const bNormalized = bDecimal / 255;
    // Return the normalized RGB values as an object
    return {
        r: rNormalized,
        g: gNormalized,
        b: bNormalized,
    };
}
const frame = figma.createFrame();
frame.name = 'Components';
frame.resize(1000, 400);
frame.layoutMode = "HORIZONTAL"; // Set the layout mode to vertical
frame.primaryAxisAlignItems = "CENTER"; // Center the text horizontally
frame.counterAxisAlignItems = "CENTER";
figma.currentPage.appendChild(frame);
const Buttons = figma.createFrame();
Buttons.name = 'Buttons';
Buttons.resize(449, 280);
const notifications = figma.createFrame();
notifications.name = 'notifications';
notifications.resize(450, 400);
const toggle = figma.createFrame();
toggle.name = 'toggle';
toggle.resize(100, 400);
function createBtn(msg, width, height, type, offsety, offsetx) {
    return __awaiter(this, void 0, void 0, function* () {
        // Step 1: Load the required font
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        const primaryRGB = hexToRGB(msg.formData.primaryColor);
        const pR = primaryRGB.r;
        const pG = primaryRGB.g;
        const pB = primaryRGB.b;
        // Step 2: Create a frame node
        const secondaryBtn = figma.createFrame();
        secondaryBtn.resize(width, height);
        secondaryBtn.x = offsetx;
        secondaryBtn.y = 50 + offsety;
        // Step 3: Position the frame on the canvas
        // Step 4: Create a text node
        const text = figma.createText();
        // Step 5: Set the text content (Make sure the font is loaded before setting the content)
        text.characters = "Button";
        // Step 6: Append the text node to the frame
        secondaryBtn.appendChild(text);
        if (type == "pri") {
            text.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
            secondaryBtn.backgrounds = [{ type: "SOLID", color: { r: pR, g: pG, b: pB } }];
        }
        else if (type == "sec") {
            text.fills = [{ type: "SOLID", color: { r: pR, g: pG, b: pB } }];
            secondaryBtn.backgrounds = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
            secondaryBtn.strokes = [{ type: "SOLID", color: { r: pR, g: pG, b: pB } }];
        }
        // Step 7: Optionally, position the text inside the frame
        text.x = secondaryBtn.width / 2 - text.width / 2; // Center the text horizontally
        text.y = secondaryBtn.height / 2 - text.height / 2; // Center the text vertically
        // Step 8: Optionally, set other properties of the frame
        secondaryBtn.name = type + "-Button";
        secondaryBtn.cornerRadius = 6;
        secondaryBtn.strokeWeight = 1;
        secondaryBtn.strokeAlign = "CENTER";
        // Step 9: Append the frame to the current page
        Buttons.appendChild(secondaryBtn);
        frame.appendChild(Buttons);
    });
}
function createNotification(type, message, offsety, offsetx) {
    return __awaiter(this, void 0, void 0, function* () {
        // Step 1: Load the required font
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        // Step 2: Create a frame node
        const box = figma.createFrame();
        box.resize(430, 45);
        box.x = offsetx;
        box.y = 50 + offsety;
        // Step 3: Position the frame on the canvas
        // Step 4: Create a text node
        const text = figma.createText();
        // Step 5: Set the text content (Make sure the font is loaded before setting the content)
        text.characters = message;
        // Step 6: Append the text node to the frame
        box.appendChild(text);
        if (type == "success") {
            text.fills = [{ type: "SOLID", color: { r: 82 / 255, g: 196 / 255, b: 26 / 255 } }];
            box.backgrounds = [{ type: "SOLID", color: { r: 246 / 255, g: 1, b: 237 / 255 } }];
            box.strokes = [{ type: "SOLID", color: { r: 183 / 255, g: 235 / 255, b: 143 / 255 } }];
        }
        else if (type == "Beware") {
            text.fills = [{ type: "SOLID", color: { r: 1, g: 77 / 255, b: 79 / 255 } }];
            box.backgrounds = [{ type: "SOLID", color: { r: 1, g: 242 / 255, b: 240 / 255 } }];
            box.strokes = [{ type: "SOLID", color: { r: 1, g: 204 / 255, b: 199 / 255 } }];
        }
        else if (type == "Warning") {
            text.fills = [{ type: "SOLID", color: { r: 250 / 255, g: 173 / 255, b: 20 / 255 } }];
            box.backgrounds = [{ type: "SOLID", color: { r: 1, g: 251 / 255, b: 230 / 255 } }];
            box.strokes = [{ type: "SOLID", color: { r: 1, g: 229 / 255, b: 143 / 255 } }];
        }
        else if (type == "Reminder") {
            text.fills = [{ type: "SOLID", color: { r: 22 / 255, g: 119 / 255, b: 1 } }];
            box.backgrounds = [{ type: "SOLID", color: { r: 230 / 255, g: 244 / 255, b: 1 } }];
            box.strokes = [{ type: "SOLID", color: { r: 145 / 255, g: 202 / 255, b: 1 } }];
        }
        // Step 7: Optionally, position the text inside the frame
        text.x = 16; // Center the text horizontally
        text.y = box.height / 2 - text.height / 2; // Center the text vertically
        // Step 8: Optionally, set other properties of the frame
        box.name = type + "-Button";
        box.cornerRadius = 6;
        box.strokeWeight = 1;
        box.strokeAlign = "CENTER";
        // Step 9: Append the frame to the current page
        notifications.appendChild(box);
        frame.appendChild(notifications);
    });
}
function createToggle(msg, offsety, offsetx, flag) {
    return __awaiter(this, void 0, void 0, function* () {
        // Step 1: Load the required font
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        const primaryRGB = hexToRGB(msg.formData.primaryColor);
        const pR = primaryRGB.r;
        const pG = primaryRGB.g;
        const pB = primaryRGB.b;
        // Step 2: Create a frame node
        const box = figma.createFrame();
        box.resize(52, 28);
        box.x = offsetx;
        box.y = 50 + offsety;
        const cirlce = figma.createFrame();
        cirlce.resize(22, 22);
        cirlce.cornerRadius = 100;
        if (flag) {
            box.fills = [{ type: "SOLID", color: { r: pR, g: pG, b: pB } }];
            cirlce.x = 27; // Center the text horizontally
            cirlce.y = box.height / 2 - cirlce.height / 2; // Center the text vertically
        }
        else {
            box.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
            cirlce.fills = [{ type: "SOLID", color: { r: 182 / 255, g: 186 / 255, b: 191 / 255 } }];
            cirlce.x = 3; // Center the text horizontally
            cirlce.y = box.height / 2 - cirlce.height / 2; // Center the text vertically
            box.strokes = [{ type: "SOLID", color: { r: 182 / 255, g: 186 / 255, b: 191 / 255 } }];
        }
        box.appendChild(cirlce);
        // Step 7: Optionally, position the text inside the frame
        // Step 8: Optionally, set other properties of the frame
        box.name = "TButton";
        box.cornerRadius = 35;
        box.strokeWeight = 1;
        box.strokeAlign = "CENTER";
        // Step 9: Append the frame to the current page
        toggle.appendChild(box);
        frame.appendChild(toggle);
    });
}
function createLandingPage(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        // Step 1: Load the required font
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        const primaryRGB = hexToRGB(msg.formData.primaryColor);
        const pR = primaryRGB.r;
        const pG = primaryRGB.g;
        const pB = primaryRGB.b;
        // Step 2: Create a frame node
        const box = figma.createFrame();
        box.resize(1600, 1016);
        box.x = 0;
        box.y = 500;
        box.name = "Landing Page";
        box.cornerRadius = 6;
        box.strokeWeight = 1;
        box.strokeAlign = "CENTER";
        box.backgrounds = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        box.strokes = [{ type: "SOLID", color: { r: pR, g: pG, b: pB } }];
        const logo = figma.createText();
        logo.characters = msg.formData.brandName.toUpperCase();
        logo.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        logo.fontSize = 24;
        logo.x = 174;
        logo.y = 149;
        const heading = figma.createText();
        heading.characters = msg.formData.brandDescription.toUpperCase();
        heading.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        heading.fontSize = 48;
        heading.x = 174;
        heading.y = 149 + 191;
        const para = figma.createText();
        para.characters = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s\nstandard dummy text ever since the 1500s";
        para.fills = [{ type: "SOLID", color: { r: 125 / 255, g: 121 / 255, b: 135 / 255 } }];
        para.fontSize = 21;
        para.x = 174;
        para.y = 149 + 191 + 90;
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        const RGB = hexToRGB(msg.formData.primaryColor);
        const R = RGB.r;
        const G = RGB.g;
        const B = RGB.b;
        // Step 2: Create a frame node
        const secondaryBtn = figma.createFrame();
        secondaryBtn.resize(200, 60);
        secondaryBtn.x = 174;
        secondaryBtn.y = 600;
        // Step 3: Position the frame on the canvas
        // Step 4: Create a text node
        const text = figma.createText();
        // Step 5: Set the text content (Make sure the font is loaded before setting the content)
        text.characters = "GET STARTED";
        text.fontSize = 18;
        // Step 6: Append the text node to the frame
        secondaryBtn.appendChild(text);
        text.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        secondaryBtn.backgrounds = [{ type: "SOLID", color: { r: R, g: G, b: B } }];
        // Step 7: Optionally, position the text inside the frame
        text.x = secondaryBtn.width / 2 - text.width / 2; // Center the text horizontally
        text.y = secondaryBtn.height / 2 - text.height / 2; // Center the text vertically
        // Step 8: Optionally, set other properties of the frame
        secondaryBtn.name = "GButton";
        secondaryBtn.cornerRadius = 6;
        secondaryBtn.strokeWeight = 1;
        secondaryBtn.strokeAlign = "CENTER";
        box.appendChild(logo);
        box.appendChild(heading);
        box.appendChild(para);
        box.appendChild(secondaryBtn);
        figma.currentPage.appendChild(box);
    });
}
figma.showUI(__html__, {
    width: 600,
    height: 400,
});
figma.ui.onmessage = msg => {
    if (msg.type === 'create') {
        function createFrameWithTextAndClosePlugin() {
            return __awaiter(this, void 0, void 0, function* () {
                yield createBtn(msg, 84, 36, "pri", 0, 20);
                yield createBtn(msg, 84, 36, "pri", 50, 20);
                yield createBtn(msg, 84, 36, "pri", 100, 20);
                yield createBtn(msg, 84, 36, "pri", 150, 20);
                yield createBtn(msg, 84, 36, "sec", 0, 120);
                yield createBtn(msg, 84, 36, "sec", 50, 120);
                yield createBtn(msg, 84, 36, "sec", 100, 120);
                yield createBtn(msg, 84, 36, "sec", 150, 120);
                yield createBtn(msg, 99, 33, "pri", 0, 220);
                yield createBtn(msg, 99, 33, "pri", 50, 220);
                yield createBtn(msg, 99, 33, "pri", 100, 220);
                yield createBtn(msg, 99, 33, "pri", 150, 220);
                yield createBtn(msg, 99, 33, "sec", 0, 330);
                yield createBtn(msg, 99, 33, "sec", 50, 330);
                yield createBtn(msg, 99, 33, "sec", 100, 330);
                yield createBtn(msg, 99, 33, "sec", 150, 330);
                yield createNotification("success", "Congraluations! You've done Something great", 50, 0);
                yield createNotification("Beware", "You should be careful about this", 100, 0);
                yield createNotification("Warning", "it may go wrong", 150, 0);
                yield createNotification("Reminder", "Just a friendly reminder", 200, 0);
                yield createToggle(msg, 50, 0, true);
                yield createToggle(msg, 100, 0, true);
                yield createToggle(msg, 150, 0, false);
                yield createToggle(msg, 200, 0, false);
                yield createLandingPage(msg);
                figma.closePlugin(); // Close the plugin after createFrameWithText is done
            });
        }
        // Call the function to create the frame with text and close the plugin
        createFrameWithTextAndClosePlugin();
    }
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
};
