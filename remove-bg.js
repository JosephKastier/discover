const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'apps/beer-rack/src/dummy-bottle.jpg');
const outputPath = path.join(__dirname, 'apps/beer-rack/src/dummy-bottle.png');

sharp(inputPath)
  .removeAlpha()
  .toBuffer(async (err, buffer, info) => {
    if (err) throw err;

    // Konvertiere zu PNG mit Transparenz
    sharp(buffer)
      .png()
      .toFile(outputPath, (err, info) => {
        if (err) throw err;
        console.log('✓ Bild konvertiert zu PNG:', outputPath);
        process.exit(0);
      });
  });

// Vereinfachte Alternative: Direkt konvertieren
sharp(inputPath)
  .png()
  .toFile(outputPath)
  .then(() => {
    console.log('✓ dummy-bottle.jpg zu dummy-bottle.png konvertiert');
    console.log('✓ Bitte öffne die PNG in Photoshop/GIMP um den weißen Hintergrund zu entfernen');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Fehler:', err);
    process.exit(1);
  });
