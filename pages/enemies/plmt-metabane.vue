<template>
  <Enemy
    name="PLMT <Metabane>"
    image="plmt-metabane.jpg"
    type="Visbanes"
    risk="II"
    description="Moves around the battlefield with ease while commanding its phantom double."
    :intel="[
      'An individual born from the aggregation of a certain number of corrupted species, only a limited number have ever been observed.',
      'It will manifest doppelganger to deliver a strange energy attack and is capable of brief moments of simple tactical consideration.',
      'Classified as a Polymerized Visbane due to its relatively high danger factor, extra attention should be paid when fighting it.',
    ]"
    :skills="[
      {
        name: 'Verdict',
        description:
          'The Metabane fires a Wing Mark at an enemy, which deals damage to nearby enemies and remain in effect. Once there are six Wing Marks on the battlefield, the Metabane will recall all Wing at once, dealing damage to all enemies in its return path.',
      },
      {
        name: 'Destruction',
        description:
          'The Matebane instantly moves near an enemy, dealing continuous damage to them by rapidly spinning its wings.',
      },
      {
        name: 'Phantom',
        description: `The Metabane releases a phantom doppelganger to hamper the enemy's judgment. The phantom will reply on their own instincts to attack the enemy.`,
      },
    ]"
  />
</template>
