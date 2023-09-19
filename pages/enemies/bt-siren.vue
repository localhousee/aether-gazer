<template>
  <Enemy
    name="BT <Siren>"
    image="bt-siren.jpg"
    type="Visbanes"
    risk="III"
    :description="`A Behemoth Type Visbane that appears near the Peripheral Sea, this is the true form of the &quot;demoness&quot; often spotted at sea. He hides his massive form under the ocean's surface, where it quietly observes everything that happens there.`"
    :intel="[
      'Capable of manipulating the ocean currents and the controlling storms, it can rapidly move around the ocean, despite his large body.',
      'He can tamper with the reality of the Surface Layer by corrupting the data of the Source Layer, forming illusory bubble worlds. The space contained within these bubble worlds disappears as soon as they burst.',
      `Like a sailor enraptured by a siren's song, who only comes to their senses when their ship runs aground, it's only when the bubble bursts that the people contained within it become aware of their imminent doom.`,
    ]"
    :skills="[
      {
        name: 'Sinking Blow',
        description:
          'Siren condenses highly-concentrated Bane Energy into a projectile and fires it forward, dealing a massive blow to a distant enemy.',
      },
      {
        name: 'Dream Rush',
        description:
          'Siren summons numerous water projectiles and sends them hurtling toward the enemy ahead.',
      },
      {
        name: 'Sea-Piercing Torrent',
        description:
          'Siren stirs up winds and waves summoning two rays to attack the seaborne enemy.',
      },
    ]"
  />
</template>
