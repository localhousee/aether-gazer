<script setup lang="ts">
const intel = [
  'A peculiar Behemoth Visbane codenamed "Bifrons", it was the first special Behemoth Visbane to be observed by Aether Gazer in recent years.',
  "It was created when Behemoth species Haagenti mutated after further assimilating Source Layer materials, gaining far greater energy within a short period of time aw well as an excessive increase in destructive power.",
  "It existence could be considered a significant threat to the balance of the Source and Surface Layers that, if left unchecked, will bring about a great calamity." +
    "<br>" +
    `Other than its tremendous power, Bifron's overconsumption of Source Layer materials allow it to release energy in the form of ranged attacks, making it an extremely dangerous opponents !`,
];
</script>
<template>
  <Enemy
    name="BT <Bifrons>"
    image="bt-bifrons.jpg"
    type="Visbanes"
    risk="III"
    description="It unscrupulously destroys everything around it by swinging the differentiated arms extending from its massive body."
    :intel="intel"
    :skills="[
      {
        name: 'Charged Punch',
        description:
          'Bifrons charges up energy then releases it as a forward punch, its differentiated arms generating considerable force.',
      },
      {
        name: 'Bane Energy Pluse',
        description: `Bifrons's arms create an an impact that releases two high-energy pulses, dealing heavy blows to distant enemies.`,
      },
      {
        name: 'Quantum Cut',
        description:
          'Bifrons unleashes two Bane Energy Blades from its arms to send an enemy ahead flying.',
      },
    ]"
  />
</template>
