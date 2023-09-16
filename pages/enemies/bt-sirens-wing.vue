<template>
  <Enemy
    name="BT <Siren's Wing>"
    image="bt-sirens-wing.jpg"
    type="Visbanes"
    risk="III"
    description="The disguise of a Behemoth Visbane Type that appears near the Peripheral Sea, the pure white sea demoness. Those bewitched by its appearance are completely unaware of the trap they've fallen into."
    :intel="[
      'Capable of manipulating the ocean currents and the controlling storms, it can rapidly move around the ocean, despite the large body.',
      'He can tamper with the reality of the Source Layer by the corrupting the data of the Source Layer, forming illusory bubble worlds. The space contained within these bubble worlds disappears as soon as they burst.',
      `Like a sailor enraptured by a siren's song, who only comes to their senses when their ship runs aground, it's only when the bubble bursts that the people contained within it become aware of their imminent doom.`,
    ]"
    :skills="[
      {
        name: 'Dream Rush',
        description:
          'Siren summons numerous water projectiles and sends them hurting forward the enemy ahead.',
      },
      {
        name: 'Sea-Piercing Torrent',
        description:
          'Siren stirs up winds and waves summoning two rays to attack the seaborne enemy.',
      },
    ]"
  />
</template>
