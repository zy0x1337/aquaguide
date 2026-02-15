# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.0.3](https://github.com/zy0x1337/aquaguide/compare/v0.0.2...v0.0.3) (2026-02-15)


### Features

* 3D tank view with animations (sway, float) and depth effects ([d74291f](https://github.com/zy0x1337/aquaguide/commit/d74291fe8af01bf509584dcf2f039e9e11ee5bd0))
* add 3 new species (Ember Tetra, Pygmy Cory, Sparkling Gourami) ([8bc8d4f](https://github.com/zy0x1337/aquaguide/commit/8bc8d4f41087f9703094728bd8a880c950f7e8aa))
* add advanced filtering system with temperature, pH, diet, and size filters ([8291abe](https://github.com/zy0x1337/aquaguide/commit/8291abe68af1a32df3cc0298272fa73c271872b7))
* add detailed Diet & Feeding Guide section to SpeciesDetailPage ([bcd6501](https://github.com/zy0x1337/aquaguide/commit/bcd65014ce7f0cc2ba913f2cbcde6d184cb04ce6))
* add Melanotaenia lacustris and Anomalochromis thomasi species profiles ([556ac0b](https://github.com/zy0x1337/aquaguide/commit/556ac0baae331f704c3b53f56f9107a5ec0c0219))
* add PageTransition component for smooth route transitions ([8bd77ad](https://github.com/zy0x1337/aquaguide/commit/8bd77adc7896c9dd87be5808ec974eeca5e03620))
* add photo attribution to species detail page header ([726bd3b](https://github.com/zy0x1337/aquaguide/commit/726bd3bbb631b1b46d2ff3658eb3d04e3aab1558))
* add preset loading UI and reset URL on clear ([1d59583](https://github.com/zy0x1337/aquaguide/commit/1d59583a72c0b06745241a666d6343944a784668))
* add preset tank configurations ([4b4928b](https://github.com/zy0x1337/aquaguide/commit/4b4928bd2756eb15275de9ce823ab5a019964e81))
* add smart feeding recommendations and lenient bioload calculator ([39fe0dc](https://github.com/zy0x1337/aquaguide/commit/39fe0dce7e1336204e96a6fa3c563ccb6f36c4b1))
* add Tank Builder to navigation in Layout.tsx ([cfc7f37](https://github.com/zy0x1337/aquaguide/commit/cfc7f37ed5bc96a0a0db050b164157ded4a66e37))
* add tank calculation utilities for realistic bioload and hardware sizing ([2f3cc6d](https://github.com/zy0x1337/aquaguide/commit/2f3cc6df120bf1ec6f8ef2433c50c90ad784e6fd))
* add TankBuilder component with 3D aquarium planner ([64fb287](https://github.com/zy0x1337/aquaguide/commit/64fb2875607e0701483b00aac66783b4f7726622))
* add TankBuilder route to App ([2fc7860](https://github.com/zy0x1337/aquaguide/commit/2fc78601518ee48805ba7752a3a3153c9ea56510))
* add TankStats component with hardware recommendations and bioload gauge ([3829da9](https://github.com/zy0x1337/aquaguide/commit/3829da9324e304b4779847fc91492e41d94fc158))
* add territorial conflict detection and enhanced aggression warnings ([ab28e13](https://github.com/zy0x1337/aquaguide/commit/ab28e13a89dc8af190f29ad0312998898ed37aa7))
* add URL encoding/decoding utilities for tank sharing ([538a475](https://github.com/zy0x1337/aquaguide/commit/538a475b5db0d147e22f4699af24c6fe5ca65618))
* complete visual overhaul of SpeciesDetailPage with framer-motion ([80c045d](https://github.com/zy0x1337/aquaguide/commit/80c045d4513d67f7497788dd9d568c7172aaccce))
* create realistic, well-planned preset tanks with proper placement ([bf67349](https://github.com/zy0x1337/aquaguide/commit/bf67349f443bc804e51d216811ab3eafb5af14ec))
* display critical territorial warnings with red alert styling ([fa900d9](https://github.com/zy0x1337/aquaguide/commit/fa900d9b66385416244be96b5f95cd024574661e))
* display smart feeding recommendations in TankStats UI ([bad8ba7](https://github.com/zy0x1337/aquaguide/commit/bad8ba767f6f769906548c622219634ae0b84308))
* enhance TankBuilder with real-size scaling, drag-drop, hardscape, enhanced compatibility ([e949ebb](https://github.com/zy0x1337/aquaguide/commit/e949ebb28ab4e561e593efabcfed457c0d78a760))
* enhanced TankSimulator with 3D effects and animations ([8620615](https://github.com/zy0x1337/aquaguide/commit/8620615f0ba1ee7ca1e59acb4a4c623a49d2647e))
* extract tank builder constants to src/data/builder.ts ([c1fe871](https://github.com/zy0x1337/aquaguide/commit/c1fe871d1c930abb5da67a95ea79a0f6d4b11947))
* extract tank builder types to src/types/builder.ts ([d24b501](https://github.com/zy0x1337/aquaguide/commit/d24b50150abdcd709434fb5f4527759d96077be9))
* hide presets temporarily and add advanced filtering system ([2b2956a](https://github.com/zy0x1337/aquaguide/commit/2b2956a05129cfce0d966e56e7ad43756079dbd8))
* implement Blueprint Mode (Top-View) and Swim Zone warnings in Tank3DView ([125cf82](https://github.com/zy0x1337/aquaguide/commit/125cf8214667a61d45d36cd6deba9fdc50fbbadb))
* implement pixel-perfect Tank3DView with ResizeObserver to prevent item squishing ([7e05beb](https://github.com/zy0x1337/aquaguide/commit/7e05bebb3f4428a94a8aeca23de0904efc1b79e7))
* integrate PageTransition into HomePage ([eed2e0f](https://github.com/zy0x1337/aquaguide/commit/eed2e0f126add521516fb26ae12befe8bcd4e5e5))
* integrate PageTransition into PlantsIndexPage ([7ab0878](https://github.com/zy0x1337/aquaguide/commit/7ab0878ebb24b7f0727ae2f79ed016daa6eaefd8))
* integrate PageTransition into SpeciesIndexPage ([53c9ea7](https://github.com/zy0x1337/aquaguide/commit/53c9ea74fc1960c291c3b74536b74c56f846e883))
* integrate share functionality with UI in TankBuilderPage ([e069e65](https://github.com/zy0x1337/aquaguide/commit/e069e656d7939c6b426c2a2c2dd7aac9f0047fd4))
* major TankBuilder visual overhaul + fix group size logic ([f3fc136](https://github.com/zy0x1337/aquaguide/commit/f3fc1362fd81036144ea4431550fcc214dc79e35))
* move Tank Builder to prominent position with eye-catching design ([4de3cb7](https://github.com/zy0x1337/aquaguide/commit/4de3cb7e9f3ac90c9e15b951ba07ea7abe8b217a))
* realistic tank dimensions, improved UX with better scaling and stocking guidance ([ff86e3f](https://github.com/zy0x1337/aquaguide/commit/ff86e3f7642245032a06e4c02fd4028acf8982e7))
* register 3 new species in index ([6c9dcc8](https://github.com/zy0x1337/aquaguide/commit/6c9dcc8f1ea7c9176581fce9e341c683b6b962d0))
* restore behavior tags and add 4 stats to SpeciesCard ([6a5a5f4](https://github.com/zy0x1337/aquaguide/commit/6a5a5f45576cba9f512891ba0f37a9f46f9a8736))
* use real fish/plant images in tank instead of icons ([8a716d1](https://github.com/zy0x1337/aquaguide/commit/8a716d1a79cca94836371766dec83e903029602b))


### Bug Fixes

* add explicit type literals to fix TypeScript errors ([668e0dc](https://github.com/zy0x1337/aquaguide/commit/668e0dcdf292dcbf25ec95886bf07c8092246902))
* complete SpeciesDetailPage with all sections ([6588592](https://github.com/zy0x1337/aquaguide/commit/6588592c479b3c5fd4c2e603c9507d09cee736ec))
* correct diet property access in tank-calculations.ts ([f3ffc1d](https://github.com/zy0x1337/aquaguide/commit/f3ffc1d1b849170a7909f66e81ef55dbb1d597ad))
* correct HARDSCAPE import and type errors in tank-share ([7f8950a](https://github.com/zy0x1337/aquaguide/commit/7f8950abf50cc74efe6e27dc811378777e305cec))
* correct planting type and remove invalid ethology tag ([078ef57](https://github.com/zy0x1337/aquaguide/commit/078ef570051014a043f9f09f2d5c9c1c1fd329bf))
* correct syntax error in StatRow component ([2bed03e](https://github.com/zy0x1337/aquaguide/commit/2bed03e67672cc3e94cadd4dacebc73f92bf5252))
* correct TypeScript types for 3 new species ([b6fdbf6](https://github.com/zy0x1337/aquaguide/commit/b6fdbf64df840856008803f1aacf0437a88d630b))
* create speciesRepository and fix TypeScript errors ([ceea5b9](https://github.com/zy0x1337/aquaguide/commit/ceea5b95bdfc2b6f0504ce770f42ce2f8ed23100))
* export allPlants from plants index ([e69b3fc](https://github.com/zy0x1337/aquaguide/commit/e69b3fc4d03994bc3eddfb0340080e2635dcabc2))
* implement realistic scaling using percentages and improve aspect ratios for fish/plants ([3f0611d](https://github.com/zy0x1337/aquaguide/commit/3f0611d08cd8c298645e468a61a889bb87df30e1))
* implement specific aspect ratios based on species iconShape and remove resizing functionality ([1b6ba92](https://github.com/zy0x1337/aquaguide/commit/1b6ba92889c36bf45f9c6a3d3a7be11b7531ba69))
* improve aspect ratios for floating plants (horizontal) vs stem plants (vertical) and optimize fish scaling to fill container ([4c3b326](https://github.com/zy0x1337/aquaguide/commit/4c3b326d8ab3fedf377994927a6143c6b3d16439))
* improve TankSimulator integration in sidebar ([ae83f00](https://github.com/zy0x1337/aquaguide/commit/ae83f009dc3e70430810d4b5d26cc2998a987d37))
* missing name property in TankConfig interface ([3a9259e](https://github.com/zy0x1337/aquaguide/commit/3a9259e906e2a9248041756aedc8c9b96938f3b6))
* prevent runtime error by migrating localStorage data with missing aspectRatio ([eabfcaa](https://github.com/zy0x1337/aquaguide/commit/eabfcaa170d31dc4586b2a5c74cbf2010ff63d6a))
* reformat TankBuilderPage.tsx to resolve syntax errors in Tank3DView and ensure valid JSX ([5e0bd48](https://github.com/zy0x1337/aquaguide/commit/5e0bd4890e08577039af227dcf58e0cf11749146))
* remove escaped characters from JSX properties causing build errors ([191d181](https://github.com/zy0x1337/aquaguide/commit/191d181618c7bda0d6469204d574a6d2fa611d77))
* remove invalid 'aggressive' tag, use only valid EthologyTags ([8be3f46](https://github.com/zy0x1337/aquaguide/commit/8be3f4618d2312968a58e0f71ec5f8fc1730166a))
* remove overflow-hidden from Tank3DView container to prevent item clipping at edges ([c90e813](https://github.com/zy0x1337/aquaguide/commit/c90e813dbd01397b367d35325d88a3145449e6da))
* remove overflow-hidden from TankBuilderPage 3D preview card to allow items to extend beyond tank edges ([de845f7](https://github.com/zy0x1337/aquaguide/commit/de845f7f8b704f1c2c4a7d68441c1e7cc56bc81d))
* remove speciesRepository, use allSpecies directly with proper types ([a9b3d8b](https://github.com/zy0x1337/aquaguide/commit/a9b3d8b97a8d20c25ba114392b08e810c66e8a9e))
* remove unused tankConfig parameter in Tank3DView ([b47a66c](https://github.com/zy0x1337/aquaguide/commit/b47a66c866fa0c2f009dda53e11ae932ceb01b4f))
* resolve TS errors in tank-calculations.ts (removed unused var and fixed shrimp check) ([e945585](https://github.com/zy0x1337/aquaguide/commit/e945585b5e63d5280ab7ef1d518a080d6d35dc2f))
* resolve TS syntax errors (escaped quotes and invalid template literals) and simplify shopping list generation ([e94d820](https://github.com/zy0x1337/aquaguide/commit/e94d820f23faa14fa5b7ae6e41ff7e0c8fc5ed2a))
* resolve typescript errors in TankBuilder ([271d457](https://github.com/zy0x1337/aquaguide/commit/271d45712413b7886b45518384478ffcade4e104))
* resolve typescript errors in TankBuilderPage ([74fe4fa](https://github.com/zy0x1337/aquaguide/commit/74fe4fa88f689858917e142a4992617361f5fe06))
* restore proper icons for stats and move behavior tags below stats ([5999311](https://github.com/zy0x1337/aquaguide/commit/5999311f462b9b8e79ea6a9b219a95480a8a4eef))
* syntax error in TankBuilderPage.tsx caused by malformed closing tags ([8b29f88](https://github.com/zy0x1337/aquaguide/commit/8b29f888460dc714e2ae33485964f4ca6e51ffe7))
* update presets with correct species IDs and filter undefined items ([fe447a4](https://github.com/zy0x1337/aquaguide/commit/fe447a4a9ca2c72bd457af0313e7f527098fc0c9))
* update SpeciesDetailPage and SpeciesIndexPage to use allSpecies directly ([f837300](https://github.com/zy0x1337/aquaguide/commit/f837300686b9d8ec7d6f2d4ad93fb7d0ca85d399))

### [0.0.2](https://github.com/zy0x1337/aquaguide/compare/v0.0.1...v0.0.2) (2026-02-14)


### Features

* add FilterBadge component for active filter visualization ([0f9fdcb](https://github.com/zy0x1337/aquaguide/commit/0f9fdcb19fe556e5f12c8311565a47206559b68f))
* add Skeleton loader components for loading states ([5e820f2](https://github.com/zy0x1337/aquaguide/commit/5e820f2923db4beddbcf14f6c784e4457c3d7fe8))
* add Toast notification system and hook ([6f573e3](https://github.com/zy0x1337/aquaguide/commit/6f573e347da79cca17d48e229b7d873a60b069bb))
* add utils library with cn() helper for Tailwind class merging ([39e8f7e](https://github.com/zy0x1337/aquaguide/commit/39e8f7ef3cd9a566a01b535390863d267fe10103))
* enhance SpeciesCard with 3D effects, improved typography and layout ([114378c](https://github.com/zy0x1337/aquaguide/commit/114378cd6b15b1b182e7cf2879526ea916163dee))
* integrate UI improvements (Skeleton, Toasts, FilterBadges, LazyLoading) into HomePage ([d97f29c](https://github.com/zy0x1337/aquaguide/commit/d97f29c91ca918eb611a6953cb0c2701db36a876))


### Bug Fixes

* correct property paths and remove unused imports in SpeciesIndexPage ([db5ed67](https://github.com/zy0x1337/aquaguide/commit/db5ed6782948d3047c1a5ff27b300fc8ffb6f42e))
* exclude test files from build in tsconfig.app.json ([8cff31f](https://github.com/zy0x1337/aquaguide/commit/8cff31fa3ac5f5f52ce067ea475168426240da1c))
* resolve TS1484 by adding type-only import for Region ([1f3bbd7](https://github.com/zy0x1337/aquaguide/commit/1f3bbd7aac565a298420d6867871aac29075d2b5))
* resolve TypeScript error in HomePage by typing regions array ([468f4dc](https://github.com/zy0x1337/aquaguide/commit/468f4dc4b9c40526da4755b5acaf91e58d2f1176))
* use lazy loading for SpeciesCard in SpeciesIndexPage to resolve build warning ([92fee13](https://github.com/zy0x1337/aquaguide/commit/92fee13975805cc53d2509c925c06a339f56030d))

### 0.0.1 (2026-02-13)
