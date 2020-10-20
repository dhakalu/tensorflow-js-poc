const tf = require('@tensorflow/tfjs')

const data = []

for (let i = 0; i < 15; i++) {
  data.push(Math.random(100))
}

const shape = [5, 3]

const tensor = tf.tensor(data, shape)

tensor.print()
