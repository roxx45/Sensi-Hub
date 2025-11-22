// Data for Phone Sensi (DPI, Touch Speed, and Recommended In-Game Sensi)
const PHONE_SENSI_DATA = [
    { model: "Redmi Note 10 Pro", dpi: 520, touchSpeed: 1.15, general: 98, redDot: 95, tips: "DPI ko 520 par set karein. Hamesha clean storage ke saath khelein. Fast touch response milega." },
    { model: "Samsung Galaxy A50", dpi: 480, touchSpeed: 1.05, general: 90, redDot: 85, tips: "Touch speed 1.05x par rakhein. Drag shots ke liye full screen swipe karein. Accuracy badhegi." },
    { model: "iPhone 11", dpi: "N/A", touchSpeed: 1.25, general: 100, redDot: 99, tips: "iOS devices mein DPI change nahi hota. Touch sensitivity ko max rakhein. Drag shots easy honge." },
    { model: "Realme C21", dpi: 580, touchSpeed: 1.10, general: 92, redDot: 88, tips: "Low-end device ke liye DPI 580 best hai. Graphics ko Smooth par rakhein. Lag kam hoga." },
    { model: "OnePlus 9R", dpi: 450, touchSpeed: 1.20, general: 100, redDot: 98, tips: "Flagship experience ke liye DPI low rakhein. 120Hz display ka poora faida uthayein." },
];

document.addEventListener('DOMContentLoaded', () => {
    const phoneModelSelect = document.getElementById('phone-model');
    const resultCard = document.getElementById('sensi-result-card');
    const modelNameDisplay = document.getElementById('model-name-display');
    const settingsContent = document.getElementById('settings-content');
    const advancedTips = document.getElementById('advanced-tips');

    // 1. Load Phone Models into the dropdown
    PHONE_SENSI_DATA.forEach(phone => {
        const option = document.createElement('option');
        option.value = phone.model;
        option.textContent = phone.model;
        phoneModelSelect.appendChild(option);
    });

    // 2. Handle selection change
    phoneModelSelect.addEventListener('change', (e) => {
        const selectedModel = e.target.value;
        if (selectedModel) {
            displayPhoneSettings(selectedModel);
        } else {
            resultCard.style.display = 'none';
        }
    });

    // 3. Display Settings Logic
    function displayPhoneSettings(modelName) {
        const phone = PHONE_SENSI_DATA.find(p => p.model === modelName);

        if (phone) {
            modelNameDisplay.textContent = phone.model;

            let html = `
                <div class="setting-item">
                    <label>Recommended DPI</label>
                    <div class="progress-container">
                        <span class="setting-value" style="color:#4CAF50;">${phone.dpi}</span>
                    </div>
                </div>
                <div class="setting-item">
                    <label>Touch Speed Multiplier</label>
                    <div class="progress-container">
                        <span class="setting-value" style="color:#ffc107;">${phone.touchSpeed}x</span>
                    </div>
                </div>
                <div class="setting-item">
                    <label>In-Game General Sensi</label>
                    <div class="progress-container">
                        <span class="setting-value" style="color:red;">${phone.general}%</span>
                    </div>
                </div>
                <div class="setting-item">
                    <label>In-Game Red Dot Sensi</label>
                    <div class="progress-container">
                        <span class="setting-value" style="color:orange;">${phone.redDot}%</span>
                    </div>
                </div>
            `;
            
            settingsContent.innerHTML = html;
            advancedTips.textContent = phone.tips;
            resultCard.style.display = 'block'; 
        }
    }
});