<template>
  <Enemy
    name="BT <Haagenti>"
    image="bt-haagenti.jpg"
    type="Visbanes"
    risk="III"
    description="The two strong arms on either side of this massive body are its greatest threat."
    :intel="[
      `Among all observed Visbane, the Behemoth Visbane - codenamed &quot;Haagenti&quot; - is quite rare. The caution of its formation is still unknown.`,
      'A special individual speculated to have been formed from the massive consumption of Source Layer material by a Visbane, it has a enormous body and destruction power for surpassing that of original Visbane.',
      'A blow from its two fists can directly tear open a channel to the Surface Layer. Its acts on purely destructive will, making a huge threat and a primary target for removal.',
    ]"
    :skills="[
      {
        name: 'Hyperspace Strike',
        description: `Haagenti appears by an enemy's side, raises its arm high, then brings them back down again in a heavy blow.`,
      },
      {
        name: 'Burst Spark',
        description:
          'Haagenti strikes the ground with force, releasing great bursts of Bane Energy sparks and sending the enemy flying.',
      },
      {
        name: 'Advancing Momentum',
        description:
          'Sweeps the battlefield, using its tremendous arms to send all obstacles flying.',
      },
    ]"
  />
</template>
