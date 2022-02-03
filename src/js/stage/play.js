import { TMXTileset } from 'melonjs';
import { Stage, game, ColorLayer, BitmapText, level, Container, Tile } from 'melonjs/dist/melonjs.module.js';

class PlayScreen extends Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {

        // // add a gray background to the default Stage
        // game.world.addChild(new ColorLayer("background", "#202020"));

        // // add a font text display object
        // game.world.addChild(new BitmapText(game.viewport.width / 2, game.viewport.height / 2, {
        //     size: 4.0,
        //     textBaseline: "middle",
        //     textAlign: "center",
        //     text: "Hello World !"
        // }));

        console.log("area01");
        level.load("area01");
        // tsxがロードできずに落ちる

        // フレームワークはtsxをtmxと同じlist内で管理しているようだが、
        // DataManifestからtmsのlistにtsxを登録しようとする(データタイプtmxで登録する)と、エラーになる。
        // これが原因で永遠にtsxがリソースとして認識されず、マップデータがロードできないのでゲームが作れない！！！

        // var levelContainer = new Container();
        // level.load("area01", { container: levelContainer });
        // // add a simple transformation
        // // levelContainer.currentTransform.translate(levelContainer.width / 2, levelContainer.height / 2);
        // // levelContainer.currentTransform.rotate(0.05);
        // // levelContainer.currentTransform.translate(-levelContainer.width / 2, -levelContainer.height / 2);
        // // add it to the game world
        // game.world.addChild(levelContainer);
    }
};

export default PlayScreen;
