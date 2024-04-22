// Programmer: Jack Sutton
// Team Member: John Burke
// Bolt ID: SB E2F0
// Date: 4.16.2024
// Program: Hello World - Sandbox
// Program URL: https://edu.sphero.com/program/16700414/edit


/*
async function startProgram() {
	await speak("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(60);
	await delay (2);
	setSpeed(0);

}
*/



async function startProgram() {

	setMainLed({ r: 100, g: 100, b: 200 });
	await speak("Hello skibidi fanum tax", true);
	await delay(1);
	for (var lol = 0; lol < 4; lol++) {
		setMainLed(getRandomColor());
		await Sound.EightBit.Explosion.play(true);
		await roll((getHeading() + 90), 50, 2);
		await delay(1);

	}
}
