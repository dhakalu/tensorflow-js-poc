# Learning Tensorflow

I created this project to learn basic concepts of `Tensorflow`.

## Creating a tensor

A tensor can be created using `tensor` function provided by the `Tensorflow` library. An example tensor is as follows:

```javascript
    import * as tf from '@tensorflow/tfjs';
    const tensor = tf.create([1, 2, 3, 4, 5])
```

To learn various ways of creating a tensor, checkout [this docs page](https://js.tensorflow.org/api/latest/#Tensors-Creation).

## Updating the data of tensor

A tensor created using `.tensor` function is immutable. This means that the data inside that tensor can never be modified.
But at differnt times we would want to update the data in tensor to adjust the new learning. To achieve that we can user `variable` function provide by the `Tensoflow` library as below: 

```javascript
    import * as tf from '@tensorflow/tfjs';
    const tensor = tf.create([1, 2, 3, 4, 5]);
    const updateAbleTensor = tf.variable(tensor);
```

## Oprating on a tensor

We can perfoem different operations on a tensor. To see a comprensive list of different things that we can do on a tensor
check out [this link](https://js.tensorflow.org/api/latest/#Operations)

In a simple example below, we are performing element wise addition of two elements. Notice we are not calling `tf.add` rather we are calling `add` on the `Tensor` object we created i.e. these operations are functions available on `Tensor` class.

```javascript
    import * as tf from '@tensorflow/tfjs';
    const tensor = tf.create([1, 2, 3, 4, 5]);
    const tensor2 = tf.create([6, 7, 8, 9, 10]);
    const sum = tensor.add(tensor2);
```