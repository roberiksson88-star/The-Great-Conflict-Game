// ===== GAME CONFIGURATION =====
const CONFIG = {
    PLAYER_SPEED: 0.15,
    PLAYER_SPRINT_SPEED: 0.3,
    PLAYER_JUMP_FORCE: 0.3,
    GRAVITY: 0.015,
    CAMERA_HEIGHT: 1.8,
    MOUSE_SENSITIVITY: 0.002,
    ENEMY_SPAWN_INTERVAL: 5000,
    MAX_ENEMIES: 20,
    LOOT_DROP_CHANCE: 0.7,
    XP_PER_LEVEL: 100,
    WORLD_SIZE: 200
};

// ===== EQUIPMENT SLOTS =====
const EQUIPMENT_SLOTS = [
    'Head', 'Chest', 'Legs', 'Feet', 'Hands',
    'Main Hand', 'Off Hand', 'Neck', 'Ring', 'Back'
];

// ===== ITEM RARITIES =====
const RARITIES = {
    COMMON: { name: 'Common', color: '#808080', statMultiplier: 1 },
    UNCOMMON: { name: 'Uncommon', color: '#00ff00', statMultiplier: 1.5 },
    RARE: { name: 'Rare', color: '#0080ff', statMultiplier: 2 },
    EPIC: { name: 'Epic', color: '#9b30ff', statMultiplier: 3 },
    LEGENDARY: { name: 'Legendary', color: '#ffd700', statMultiplier: 5 }
};

// ===== LOOT TABLE =====
const LOOT_TABLE = {
    'Head': [
        { name: 'Demon Skull Helm', stats: { defense: 15, str: 5 } },
        { name: 'Shadow Crown', stats: { defense: 12, int: 8 } },
        { name: 'Cursed Circlet', stats: { defense: 10, vit: 6 } },
        { name: 'Dark Knight Helmet', stats: { defense: 20, str: 10 } }
    ],
    'Chest': [
        { name: 'Abyssal Plate Armor', stats: { defense: 30, vit: 15 } },
        { name: 'Demon Hide Cuirass', stats: { defense: 25, str: 10 } },
        { name: 'Shadow Mail', stats: { defense: 20, dex: 12 } },
        { name: 'Dark Knight Armor', stats: { defense: 40, str: 15, vit: 10 } }
    ],
    'Legs': [
        { name: 'Corrupted Greaves', stats: { defense: 18, vit: 8 } },
        { name: 'Demon Scale Leggings', stats: { defense: 15, str: 7 } },
        { name: 'Shadow Pants', stats: { defense: 12, dex: 10 } }
    ],
    'Feet': [
        { name: 'Boots of the Damned', stats: { defense: 10, dex: 8 } },
        { name: 'Hellfire Sabatons', stats: { defense: 12, str: 6 } },
        { name: 'Shadow Striders', stats: { defense: 8, dex: 12 } }
    ],
    'Hands': [
        { name: 'Gauntlets of Rage', stats: { defense: 8, str: 10 } },
        { name: 'Demon Claw Gloves', stats: { defense: 6, dex: 8, str: 5 } },
        { name: 'Shadow Grips', stats: { defense: 5, int: 7 } }
    ],
    'Main Hand': [
        { name: 'Soul Reaver', stats: { attack: 50, str: 15 } },
        { name: 'Demon Slayer Blade', stats: { attack: 45, str: 12, vit: 5 } },
        { name: 'Shadow Sword', stats: { attack: 40, dex: 15 } },
        { name: 'Cursed Greatsword', stats: { attack: 60, str: 20 } },
        { name: 'Deathbringer', stats: { attack: 70, str: 25, int: 10 } }
    ],
    'Off Hand': [
        { name: 'Demon Skull Shield', stats: { defense: 20, vit: 10 } },
        { name: 'Shadow Buckler', stats: { defense: 15, dex: 8 } },
        { name: 'Cursed Tome', stats: { int: 15, attack: 10 } }
    ],
    'Neck': [
        { name: 'Amulet of Shadows', stats: { int: 10, vit: 8 } },
        { name: 'Demon Heart Necklace', stats: { str: 12, vit: 10 } },
        { name: 'Cursed Pendant', stats: { int: 15, str: 8 } }
    ],
    'Ring': [
        { name: 'Ring of Dark Power', stats: { str: 8, int: 8 } },
        { name: 'Demon Band', stats: { attack: 15, str: 10 } },
        { name: 'Shadow Ring', stats: { dex: 12, int: 8 } }
    ],
    'Back': [
        { name: 'Cloak of Shadows', stats: { defense: 15, dex: 10 } },
        { name: 'Demon Wing Cape', stats: { defense: 12, str: 8, vit: 8 } },
        { name: 'Cursed Mantle', stats: { defense: 10, int: 12 } }
    ]
};

// ===== SKILL SYSTEM =====
const SKILLS = [
    {
        name: 'Heavy Strike',
        icon: '⚔️',
        damage: 100,
        manaCost: 20,
        cooldown: 2000,
        range: 5,
        description: 'A powerful melee strike'
    },
    {
        name: 'Flame Slash',
        icon: '🔥',
        damage: 150,
        manaCost: 40,
        cooldown: 4000,
        range: 8,
        aoe: true,
        description: 'Slash with burning flames'
    },
    {
        name: 'Lightning Strike',
        icon: '⚡',
        damage: 200,
        manaCost: 60,
        cooldown: 6000,
        range: 15,
        description: 'Call down lightning'
    },
    {
        name: 'Shadow Spin',
        icon: '🌀',
        damage: 120,
        manaCost: 50,
        cooldown: 5000,
        range: 6,
        aoe: true,
        description: 'Spin attack hitting all nearby enemies'
    },
    {
        name: 'Death Strike',
        icon: '💀',
        damage: 300,
        manaCost: 100,
        cooldown: 10000,
        range: 10,
        description: 'Ultimate dark power attack'
    }
];

// ===== ENEMY TYPES =====
const ENEMY_TYPES = [
    {
        name: 'Shadow Demon',
        health: 150,
        damage: 15,
        xp: 25,
        color: 0x1a0033,
        speed: 0.08,
        scale: 1.2
    },
    {
        name: 'Hellhound',
        health: 100,
        damage: 20,
        xp: 20,
        color: 0x660000,
        speed: 0.12,
        scale: 0.8
    },
    {
        name: 'Corrupted Wraith',
        health: 80,
        damage: 25,
        xp: 30,
        color: 0x003300,
        speed: 0.1,
        scale: 1.5
    },
    {
        name: 'Abyssal Knight',
        health: 300,
        damage: 30,
        xp: 50,
        color: 0x330000,
        speed: 0.06,
        scale: 1.8
    },
    {
        name: 'Demon Lord',
        health: 500,
        damage: 50,
        xp: 100,
        color: 0x660033,
        speed: 0.07,
        scale: 2.5
    }
];

// ===== GAME STATE =====
class GameState {
    constructor() {
        this.player = {
            health: 1000,
            maxHealth: 1000,
            mana: 500,
            maxMana: 500,
            level: 1,
            xp: 0,
            stats: {
                str: 10,
                vit: 10,
                int: 10,
                dex: 10
            },
            equipment: {},
            inventory: [],
            position: new THREE.Vector3(0, 2, 0),
            velocity: new THREE.Vector3(0, 0, 0),
            isGrounded: false,
            kills: 0
        };

        this.skills = SKILLS.map(skill => ({
            ...skill,
            lastUsed: 0
        }));

        this.enemies = [];
        this.lootDrops = [];
        this.damageNumbers = [];

        // Initialize equipment slots
        EQUIPMENT_SLOTS.forEach(slot => {
            this.player.equipment[slot] = null;
        });
    }

    calculateStats() {
        let baseAttack = 25 + (this.player.stats.str * 2);
        let baseDefense = 15 + (this.player.stats.vit * 1.5);

        // Add equipment bonuses
        Object.values(this.player.equipment).forEach(item => {
            if (item && item.stats) {
                baseAttack += item.stats.attack || 0;
                baseDefense += item.stats.defense || 0;
                this.player.stats.str += item.stats.str || 0;
                this.player.stats.vit += item.stats.vit || 0;
                this.player.stats.int += item.stats.int || 0;
                this.player.stats.dex += item.stats.dex || 0;
            }
        });

        return { attack: Math.floor(baseAttack), defense: Math.floor(baseDefense) };
    }

    gainXP(amount) {
        this.player.xp += amount;
        const xpNeeded = this.player.level * CONFIG.XP_PER_LEVEL;

        if (this.player.xp >= xpNeeded) {
            this.levelUp();
        }

        this.updateUI();
    }

    levelUp() {
        this.player.level++;
        this.player.xp = 0;

        // Increase stats
        this.player.stats.str += 2;
        this.player.stats.vit += 2;
        this.player.stats.int += 2;
        this.player.stats.dex += 2;

        // Restore health and mana
        this.player.maxHealth += 50;
        this.player.maxMana += 25;
        this.player.health = this.player.maxHealth;
        this.player.mana = this.player.maxMana;

        this.showNotification(`🎉 Level Up! You are now level ${this.player.level}!`);
        this.updateUI();
    }

    updateUI() {
        // Update health bar
        const healthPercent = (this.player.health / this.player.maxHealth) * 100;
        document.getElementById('health-bar').style.width = healthPercent + '%';
        document.getElementById('health-text').textContent =
            `HP: ${Math.floor(this.player.health)} / ${this.player.maxHealth}`;

        // Update mana bar
        const manaPercent = (this.player.mana / this.player.maxMana) * 100;
        document.getElementById('mana-bar').style.width = manaPercent + '%';
        document.getElementById('mana-text').textContent =
            `Mana: ${Math.floor(this.player.mana)} / ${this.player.maxMana}`;

        // Update stats
        const stats = this.calculateStats();
        document.getElementById('stat-level').textContent = this.player.level;
        document.getElementById('stat-xp').textContent = this.player.xp;
        document.getElementById('stat-xp-needed').textContent = this.player.level * CONFIG.XP_PER_LEVEL;
        document.getElementById('stat-str').textContent = this.player.stats.str;
        document.getElementById('stat-vit').textContent = this.player.stats.vit;
        document.getElementById('stat-int').textContent = this.player.stats.int;
        document.getElementById('stat-dex').textContent = this.player.stats.dex;
        document.getElementById('stat-attack').textContent = stats.attack;
        document.getElementById('stat-defense').textContent = stats.defense;
        document.getElementById('stat-kills').textContent = this.player.kills;
    }

    showNotification(text) {
        const notification = document.getElementById('loot-notification');
        notification.textContent = text;
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    takeDamage(amount) {
        const stats = this.calculateStats();
        const actualDamage = Math.max(1, amount - (stats.defense * 0.5));
        this.player.health = Math.max(0, this.player.health - actualDamage);
        this.updateUI();

        if (this.player.health <= 0) {
            this.playerDeath();
        }
    }

    playerDeath() {
        this.showNotification('💀 You have been slain! Respawning...');
        setTimeout(() => {
            this.player.health = this.player.maxHealth;
            this.player.mana = this.player.maxMana;
            this.player.position.set(0, 2, 0);
            this.updateUI();
        }, 2000);
    }

    regenerate(deltaTime) {
        // Health regeneration
        if (this.player.health < this.player.maxHealth) {
            this.player.health = Math.min(
                this.player.maxHealth,
                this.player.health + (this.player.stats.vit * 0.01 * deltaTime / 16)
            );
        }

        // Mana regeneration
        if (this.player.mana < this.player.maxMana) {
            this.player.mana = Math.min(
                this.player.maxMana,
                this.player.mana + (this.player.stats.int * 0.02 * deltaTime / 16)
            );
        }
    }
}

// ===== GAME ENGINE =====
class DarkKnightRPG {
    constructor() {
        this.gameState = new GameState();
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.controls = null;
        this.playerMesh = null;
        this.playerModel = null;
        this.moveForward = false;
        this.moveBackward = false;
        this.moveLeft = false;
        this.moveRight = false;
        this.canJump = false;
        this.sprint = false;
        this.inventoryOpen = false;
        this.clock = new THREE.Clock();
        this.mixer = null;
        this.animations = {};
        this.audioContext = null;
        this.bgMusic = null;

        this.init();
    }

    async init() {
        this.setupRenderer();
        this.setupScene();
        this.setupCamera();
        this.setupLights();
        await this.setupPlayer();
        this.setupControls();
        this.setupWorld();
        this.setupAudio();
        this.setupEventListeners();
        this.startEnemySpawner();
        this.gameState.updateUI();
        this.updateInventoryUI();

        // Hide loading screen
        document.getElementById('loading-screen').classList.add('hidden');

        this.animate();
    }

    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        document.getElementById('canvas-container').appendChild(this.renderer.domElement);
    }

    setupScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0a0a0a);
        this.scene.fog = new THREE.Fog(0x0a0a0a, 10, 100);
    }

    setupCamera() {
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, CONFIG.CAMERA_HEIGHT, 0);
    }

    setupLights() {
        // Ambient light (dark)
        const ambientLight = new THREE.AmbientLight(0x330033, 0.3);
        this.scene.add(ambientLight);

        // Directional light (moonlight)
        const moonLight = new THREE.DirectionalLight(0x6666aa, 0.5);
        moonLight.position.set(50, 100, 50);
        moonLight.castShadow = true;
        moonLight.shadow.mapSize.width = 2048;
        moonLight.shadow.mapSize.height = 2048;
        moonLight.shadow.camera.far = 200;
        moonLight.shadow.camera.left = -100;
        moonLight.shadow.camera.right = 100;
        moonLight.shadow.camera.top = 100;
        moonLight.shadow.camera.bottom = -100;
        this.scene.add(moonLight);

        // Point lights for atmosphere
        const redLight = new THREE.PointLight(0xff0000, 1, 50);
        redLight.position.set(-20, 5, -20);
        this.scene.add(redLight);

        const purpleLight = new THREE.PointLight(0x9900ff, 1, 50);
        purpleLight.position.set(20, 5, 20);
        this.scene.add(purpleLight);
    }

    async setupPlayer() {
        // Create temporary player mesh
        const geometry = new THREE.BoxGeometry(1, 2, 1);
        const material = new THREE.MeshPhongMaterial({
            color: 0x330033,
            emissive: 0x110011
        });
        this.playerMesh = new THREE.Mesh(geometry, material);
        this.playerMesh.position.copy(this.gameState.player.position);
        this.playerMesh.castShadow = true;
        this.scene.add(this.playerMesh);

        // Try to load the actual player model
        const loader = new THREE.GLTFLoader();
        try {
            const gltf = await new Promise((resolve, reject) => {
                loader.load(
                    'Character_output.glb',
                    resolve,
                    (progress) => {
                        const percent = (progress.loaded / progress.total) * 100;
                        document.getElementById('loading-progress').style.width = percent + '%';
                    },
                    reject
                );
            });

            this.playerModel = gltf.scene;
            this.playerModel.scale.set(0.5, 0.5, 0.5);
            this.playerModel.position.copy(this.gameState.player.position);
            this.playerModel.traverse((node) => {
                if (node.isMesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            });

            // Setup animations
            if (gltf.animations && gltf.animations.length > 0) {
                this.mixer = new THREE.AnimationMixer(this.playerModel);
                gltf.animations.forEach((clip) => {
                    this.animations[clip.name] = this.mixer.clipAction(clip);
                });
            }

            this.scene.remove(this.playerMesh);
            this.scene.add(this.playerModel);
            this.playerMesh = this.playerModel;
        } catch (error) {
            console.log('Using basic player model');
        }
    }

    setupControls() {
        this.controls = new THREE.PointerLockControls(this.camera, document.body);

        document.body.addEventListener('click', () => {
            if (!this.inventoryOpen) {
                this.controls.lock();
            }
        });

        this.controls.addEventListener('lock', () => {
            console.log('Controls locked');
        });

        this.controls.addEventListener('unlock', () => {
            console.log('Controls unlocked');
        });
    }

    setupWorld() {
        // Ground
        const groundGeometry = new THREE.PlaneGeometry(CONFIG.WORLD_SIZE, CONFIG.WORLD_SIZE, 50, 50);

        // Distort ground for uneven terrain
        const positions = groundGeometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
            positions[i + 2] = Math.random() * 2 - 1;
        }
        groundGeometry.computeVertexNormals();

        const groundMaterial = new THREE.MeshPhongMaterial({
            color: 0x1a1a1a,
            flatShading: true
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        this.scene.add(ground);

        // Add ominous structures
        for (let i = 0; i < 30; i++) {
            const height = Math.random() * 10 + 5;
            const radius = Math.random() * 2 + 1;
            const geometry = new THREE.CylinderGeometry(radius, radius * 1.5, height, 6);
            const material = new THREE.MeshPhongMaterial({
                color: 0x222222,
                emissive: 0x110011
            });
            const pillar = new THREE.Mesh(geometry, material);

            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 80 + 20;
            pillar.position.set(
                Math.cos(angle) * distance,
                height / 2,
                Math.sin(angle) * distance
            );
            pillar.castShadow = true;
            pillar.receiveShadow = true;
            this.scene.add(pillar);
        }

        // Add some rocks/obstacles
        for (let i = 0; i < 50; i++) {
            const size = Math.random() * 3 + 1;
            const geometry = new THREE.DodecahedronGeometry(size);
            const material = new THREE.MeshPhongMaterial({
                color: 0x333333,
                flatShading: true
            });
            const rock = new THREE.Mesh(geometry, material);

            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 90 + 10;
            rock.position.set(
                Math.cos(angle) * distance,
                size / 2,
                Math.sin(angle) * distance
            );
            rock.rotation.set(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            );
            rock.castShadow = true;
            rock.receiveShadow = true;
            this.scene.add(rock);
        }

        // Particle system for atmosphere
        const particleCount = 1000;
        const particlesGeometry = new THREE.BufferGeometry();
        const particlePositions = [];

        for (let i = 0; i < particleCount; i++) {
            particlePositions.push(
                (Math.random() - 0.5) * CONFIG.WORLD_SIZE,
                Math.random() * 50,
                (Math.random() - 0.5) * CONFIG.WORLD_SIZE
            );
        }

        particlesGeometry.setAttribute('position',
            new THREE.Float32BufferAttribute(particlePositions, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            color: 0x9900ff,
            size: 0.5,
            transparent: true,
            opacity: 0.6
        });

        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        this.scene.add(particles);
    }

    setupAudio() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

            // Load background music
            this.bgMusic = new Audio('TGC Main Theme.mp3');
            this.bgMusic.loop = true;
            this.bgMusic.volume = 0.3;

            // Play music on first user interaction
            const playMusic = () => {
                if (this.audioContext.state === 'suspended') {
                    this.audioContext.resume();
                }
                this.bgMusic.play().catch(e => console.log('Audio play failed:', e));
                document.removeEventListener('click', playMusic);
                document.removeEventListener('keydown', playMusic);
            };

            document.addEventListener('click', playMusic);
            document.addEventListener('keydown', playMusic);
        } catch (error) {
            console.log('Audio setup failed:', error);
        }
    }

    setupEventListeners() {
        // Movement keys
        document.addEventListener('keydown', (e) => {
            switch (e.code) {
                case 'KeyW': this.moveForward = true; break;
                case 'KeyS': this.moveBackward = true; break;
                case 'KeyA': this.moveLeft = true; break;
                case 'KeyD': this.moveRight = true; break;
                case 'Space':
                    if (this.canJump) {
                        this.gameState.player.velocity.y = CONFIG.PLAYER_JUMP_FORCE;
                        this.canJump = false;
                    }
                    break;
                case 'ShiftLeft': this.sprint = true; break;
                case 'KeyI': this.toggleInventory(); break;
                case 'KeyE': this.pickupNearbyLoot(); break;
                case 'Digit1': this.useSkill(0); break;
                case 'Digit2': this.useSkill(1); break;
                case 'Digit3': this.useSkill(2); break;
                case 'Digit4': this.useSkill(3); break;
                case 'Digit5': this.useSkill(4); break;
            }
        });

        document.addEventListener('keyup', (e) => {
            switch (e.code) {
                case 'KeyW': this.moveForward = false; break;
                case 'KeyS': this.moveBackward = false; break;
                case 'KeyA': this.moveLeft = false; break;
                case 'KeyD': this.moveRight = false; break;
                case 'ShiftLeft': this.sprint = false; break;
            }
        });

        // Click to attack
        document.addEventListener('click', () => {
            if (this.controls.isLocked && !this.inventoryOpen) {
                this.useSkill(0); // Basic attack
            }
        });

        // Window resize
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Skill slot clicks
        document.querySelectorAll('.skill-slot').forEach((slot, index) => {
            slot.addEventListener('click', () => this.useSkill(index));
        });
    }

    toggleInventory() {
        this.inventoryOpen = !this.inventoryOpen;
        const panel = document.getElementById('inventory-panel');

        if (this.inventoryOpen) {
            panel.classList.add('active');
            this.controls.unlock();
            this.updateInventoryUI();
        } else {
            panel.classList.remove('active');
        }
    }

    updateInventoryUI() {
        // Update equipment slots
        const equipmentContainer = document.getElementById('equipment-slots');
        equipmentContainer.innerHTML = '';

        EQUIPMENT_SLOTS.forEach(slotName => {
            const slot = document.createElement('div');
            slot.className = 'equipment-slot';

            const item = this.gameState.player.equipment[slotName];
            if (item) {
                slot.classList.add('equipped');
                slot.style.borderColor = item.rarity.color;
            }

            slot.innerHTML = `
                <div class="slot-name">${slotName}</div>
                <div class="slot-item">${item ? item.name : 'Empty'}</div>
                ${item ? `<div style="font-size: 12px; color: #888; margin-top: 5px;">
                    ${Object.entries(item.stats).map(([stat, value]) =>
                        `${stat}: +${value}`).join(', ')}
                </div>` : ''}
            `;

            slot.addEventListener('click', () => {
                if (item) {
                    this.unequipItem(slotName);
                }
            });

            equipmentContainer.appendChild(slot);
        });

        // Update inventory grid
        const inventoryContainer = document.getElementById('inventory-grid');
        inventoryContainer.innerHTML = '';

        this.gameState.player.inventory.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = `inventory-item item-rarity-${item.rarity.name.toLowerCase()}`;
            itemDiv.innerHTML = `
                <div style="font-weight: bold; margin-bottom: 5px;">${item.name}</div>
                <div style="font-size: 12px; color: ${item.rarity.color};">${item.rarity.name}</div>
                <div style="font-size: 11px; color: #888; margin-top: 5px;">
                    ${Object.entries(item.stats).map(([stat, value]) =>
                        `${stat}: +${value}`).join('<br>')}
                </div>
            `;

            itemDiv.addEventListener('click', () => {
                this.equipItem(item, index);
            });

            inventoryContainer.appendChild(itemDiv);
        });
    }

    equipItem(item, inventoryIndex) {
        const slot = item.slot;

        // Unequip current item if any
        if (this.gameState.player.equipment[slot]) {
            this.gameState.player.inventory.push(this.gameState.player.equipment[slot]);
        }

        // Equip new item
        this.gameState.player.equipment[slot] = item;
        this.gameState.player.inventory.splice(inventoryIndex, 1);

        this.gameState.updateUI();
        this.updateInventoryUI();
        this.gameState.showNotification(`Equipped: ${item.name}`);
    }

    unequipItem(slotName) {
        const item = this.gameState.player.equipment[slotName];
        if (item) {
            this.gameState.player.inventory.push(item);
            this.gameState.player.equipment[slotName] = null;
            this.gameState.updateUI();
            this.updateInventoryUI();
            this.gameState.showNotification(`Unequipped: ${item.name}`);
        }
    }

    generateLootItem() {
        // Random slot
        const slot = EQUIPMENT_SLOTS[Math.floor(Math.random() * EQUIPMENT_SLOTS.length)];
        const items = LOOT_TABLE[slot];
        const baseItem = items[Math.floor(Math.random() * items.length)];

        // Random rarity
        const rarityRoll = Math.random();
        let rarity;
        if (rarityRoll < 0.50) rarity = RARITIES.COMMON;
        else if (rarityRoll < 0.75) rarity = RARITIES.UNCOMMON;
        else if (rarityRoll < 0.90) rarity = RARITIES.RARE;
        else if (rarityRoll < 0.97) rarity = RARITIES.EPIC;
        else rarity = RARITIES.LEGENDARY;

        // Apply rarity multiplier to stats
        const stats = {};
        Object.entries(baseItem.stats).forEach(([stat, value]) => {
            stats[stat] = Math.floor(value * rarity.statMultiplier);
        });

        return {
            name: baseItem.name,
            slot: slot,
            stats: stats,
            rarity: rarity
        };
    }

    spawnLoot(position) {
        const item = this.generateLootItem();

        // Create loot mesh
        const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const material = new THREE.MeshPhongMaterial({
            color: item.rarity.color,
            emissive: item.rarity.color,
            emissiveIntensity: 0.5
        });
        const lootMesh = new THREE.Mesh(geometry, material);
        lootMesh.position.copy(position);
        lootMesh.position.y = 1;
        this.scene.add(lootMesh);

        this.gameState.lootDrops.push({
            mesh: lootMesh,
            item: item
        });

        // Remove loot after 30 seconds
        setTimeout(() => {
            const index = this.gameState.lootDrops.findIndex(l => l.mesh === lootMesh);
            if (index !== -1) {
                this.scene.remove(lootMesh);
                this.gameState.lootDrops.splice(index, 1);
            }
        }, 30000);
    }

    pickupNearbyLoot() {
        const playerPos = this.gameState.player.position;

        this.gameState.lootDrops.forEach((loot, index) => {
            const distance = playerPos.distanceTo(loot.mesh.position);

            if (distance < 3) {
                // Add to inventory
                this.gameState.player.inventory.push(loot.item);
                this.gameState.showNotification(
                    `Found: ${loot.item.name} (${loot.item.rarity.name})`
                );

                // Remove from scene
                this.scene.remove(loot.mesh);
                this.gameState.lootDrops.splice(index, 1);
            }
        });
    }

    useSkill(skillIndex) {
        const skill = this.gameState.skills[skillIndex];
        const now = Date.now();

        if (now - skill.lastUsed < skill.cooldown) {
            return; // Still on cooldown
        }

        if (this.gameState.player.mana < skill.manaCost) {
            this.gameState.showNotification('Not enough mana!');
            return;
        }

        // Use mana
        this.gameState.player.mana -= skill.manaCost;
        skill.lastUsed = now;

        // Start cooldown animation
        this.animateSkillCooldown(skillIndex, skill.cooldown);

        // Attack enemies in range
        this.attackEnemiesInRange(skill);

        this.gameState.updateUI();
    }

    animateSkillCooldown(skillIndex, duration) {
        const slot = document.querySelector(`.skill-slot[data-skill="${skillIndex}"]`);
        const overlay = slot.querySelector('.cooldown-overlay');

        slot.classList.add('on-cooldown');
        overlay.style.height = '100%';

        const startTime = Date.now();
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            overlay.style.height = ((1 - progress) * 100) + '%';

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                slot.classList.remove('on-cooldown');
            }
        };

        animate();
    }

    attackEnemiesInRange(skill) {
        const playerPos = this.gameState.player.position;
        const stats = this.gameState.calculateStats();
        const damage = skill.damage + stats.attack;

        this.gameState.enemies.forEach((enemy, index) => {
            const distance = playerPos.distanceTo(enemy.mesh.position);

            if (distance <= skill.range) {
                // Calculate direction for knockback
                const direction = new THREE.Vector3()
                    .subVectors(enemy.mesh.position, playerPos)
                    .normalize();

                // Apply damage
                enemy.health -= damage;
                this.showDamageNumber(damage, enemy.mesh.position);

                // Knockback
                enemy.mesh.position.add(direction.multiplyScalar(2));

                if (enemy.health <= 0) {
                    this.killEnemy(index);
                }
            }
        });
    }

    showDamageNumber(damage, position) {
        const screenPos = position.clone().project(this.camera);
        const x = (screenPos.x * 0.5 + 0.5) * window.innerWidth;
        const y = (screenPos.y * -0.5 + 0.5) * window.innerHeight;

        const damageDiv = document.createElement('div');
        damageDiv.className = 'damage-number';
        damageDiv.textContent = Math.floor(damage);
        damageDiv.style.left = x + 'px';
        damageDiv.style.top = y + 'px';
        damageDiv.style.color = '#ff0000';

        document.getElementById('ui-overlay').appendChild(damageDiv);

        setTimeout(() => {
            damageDiv.remove();
        }, 1000);
    }

    killEnemy(index) {
        const enemy = this.gameState.enemies[index];

        // Grant XP
        this.gameState.gainXP(enemy.type.xp);
        this.gameState.player.kills++;

        // Drop loot
        if (Math.random() < CONFIG.LOOT_DROP_CHANCE) {
            this.spawnLoot(enemy.mesh.position);
        }

        // Remove enemy
        this.scene.remove(enemy.mesh);
        if (enemy.healthBar) {
            enemy.healthBar.remove();
        }
        this.gameState.enemies.splice(index, 1);

        this.gameState.updateUI();
    }

    spawnEnemy() {
        if (this.gameState.enemies.length >= CONFIG.MAX_ENEMIES) {
            return;
        }

        const type = ENEMY_TYPES[Math.floor(Math.random() * ENEMY_TYPES.length)];

        // Spawn at random position around player
        const angle = Math.random() * Math.PI * 2;
        const distance = 20 + Math.random() * 30;
        const position = new THREE.Vector3(
            this.gameState.player.position.x + Math.cos(angle) * distance,
            type.scale,
            this.gameState.player.position.z + Math.sin(angle) * distance
        );

        // Create enemy mesh
        const geometry = new THREE.ConeGeometry(type.scale * 0.5, type.scale * 2, 8);
        const material = new THREE.MeshPhongMaterial({
            color: type.color,
            emissive: type.color,
            emissiveIntensity: 0.3
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.copy(position);
        mesh.castShadow = true;
        this.scene.add(mesh);

        // Create health bar
        const healthBarDiv = document.createElement('div');
        healthBarDiv.className = 'enemy-health-bar';
        healthBarDiv.innerHTML = '<div class="enemy-health-fill" style="width: 100%;"></div>';
        document.getElementById('ui-overlay').appendChild(healthBarDiv);

        const enemy = {
            mesh: mesh,
            type: type,
            health: type.health,
            maxHealth: type.health,
            healthBar: healthBarDiv
        };

        this.gameState.enemies.push(enemy);
    }

    startEnemySpawner() {
        setInterval(() => {
            this.spawnEnemy();
        }, CONFIG.ENEMY_SPAWN_INTERVAL);

        // Spawn initial enemies
        for (let i = 0; i < 5; i++) {
            this.spawnEnemy();
        }
    }

    updateEnemies(deltaTime) {
        const playerPos = this.gameState.player.position;

        this.gameState.enemies.forEach(enemy => {
            // Move towards player
            const direction = new THREE.Vector3()
                .subVectors(playerPos, enemy.mesh.position)
                .normalize();

            enemy.mesh.position.add(direction.multiplyScalar(enemy.type.speed));

            // Rotate to face player
            enemy.mesh.lookAt(playerPos);

            // Attack if close enough
            const distance = playerPos.distanceTo(enemy.mesh.position);
            if (distance < 2) {
                // Attack player (limit to once per second)
                if (!enemy.lastAttack || Date.now() - enemy.lastAttack > 1000) {
                    this.gameState.takeDamage(enemy.type.damage);
                    enemy.lastAttack = Date.now();
                }
            }

            // Update health bar position
            const screenPos = enemy.mesh.position.clone().project(this.camera);
            const x = (screenPos.x * 0.5 + 0.5) * window.innerWidth;
            const y = (screenPos.y * -0.5 + 0.5) * window.innerHeight - 30;

            enemy.healthBar.style.left = x - 50 + 'px';
            enemy.healthBar.style.top = y + 'px';

            const healthPercent = (enemy.health / enemy.maxHealth) * 100;
            enemy.healthBar.querySelector('.enemy-health-fill').style.width = healthPercent + '%';
        });
    }

    updatePlayer(deltaTime) {
        const speed = this.sprint ? CONFIG.PLAYER_SPRINT_SPEED : CONFIG.PLAYER_SPEED;

        if (this.controls.isLocked) {
            const direction = new THREE.Vector3();

            if (this.moveForward) direction.z -= 1;
            if (this.moveBackward) direction.z += 1;
            if (this.moveLeft) direction.x -= 1;
            if (this.moveRight) direction.x += 1;

            direction.normalize();

            if (direction.length() > 0) {
                const euler = new THREE.Euler(0, 0, 0, 'YXZ');
                euler.setFromQuaternion(this.camera.quaternion);

                const forward = new THREE.Vector3(0, 0, -1);
                forward.applyEuler(euler);
                forward.y = 0;
                forward.normalize();

                const right = new THREE.Vector3(1, 0, 0);
                right.applyEuler(euler);
                right.y = 0;
                right.normalize();

                const moveDir = new THREE.Vector3();
                moveDir.addScaledVector(forward, -direction.z);
                moveDir.addScaledVector(right, direction.x);
                moveDir.normalize();

                this.gameState.player.position.add(moveDir.multiplyScalar(speed));
            }
        }

        // Apply gravity
        this.gameState.player.velocity.y -= CONFIG.GRAVITY;
        this.gameState.player.position.add(this.gameState.player.velocity);

        // Ground collision
        if (this.gameState.player.position.y <= 2) {
            this.gameState.player.position.y = 2;
            this.gameState.player.velocity.y = 0;
            this.canJump = true;
        }

        // Update camera and player mesh position
        this.camera.position.x = this.gameState.player.position.x;
        this.camera.position.y = this.gameState.player.position.y + CONFIG.CAMERA_HEIGHT;
        this.camera.position.z = this.gameState.player.position.z;

        if (this.playerMesh) {
            this.playerMesh.position.copy(this.gameState.player.position);
        }

        // Regeneration
        this.gameState.regenerate(deltaTime);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        const deltaTime = this.clock.getDelta() * 1000;

        // Update animations
        if (this.mixer) {
            this.mixer.update(deltaTime / 1000);
        }

        // Update game systems
        this.updatePlayer(deltaTime);
        this.updateEnemies(deltaTime);

        // Rotate loot drops
        this.gameState.lootDrops.forEach(loot => {
            loot.mesh.rotation.y += 0.02;
            loot.mesh.position.y = 1 + Math.sin(Date.now() * 0.002) * 0.2;
        });

        // Update UI periodically
        if (Math.random() < 0.01) {
            this.gameState.updateUI();
        }

        // Render
        this.renderer.render(this.scene, this.camera);
    }
}

// ===== START GAME =====
window.addEventListener('DOMContentLoaded', () => {
    const game = new DarkKnightRPG();
    window.game = game; // For debugging
});
