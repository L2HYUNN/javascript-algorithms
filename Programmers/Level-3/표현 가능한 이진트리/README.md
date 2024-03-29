# 표현 가능한 이진트리

## 23.12.10
문제를 해결하기 위해서는 다음과 같은 두 가지 문제를 해결해야 했다.

1. 포화 이진 트리의 구현

    문제에서 포화 이진 트리를 만들어 2진수로 표현하고 있기 떄문에 이 과정이 필요했다.

    처음에 이진 트리에 대한 이해가 부족해 단순히 0을 이진 트리 앞에 하나 붙이는 방법으로 접근했지만 곧 문제가 있다는 것을 알 수 있었다.

    이후 이진 트리에 대한 학습을 한 이후 이진 트리의 높이, 총 노드의 수를 구하는 방법등을 이용해 포화 이진 트리를 만들어낼 수 있었다.

    - **노드의 개수를 N이라 할 때 이진 트리의 높이는 log2(N + 1)로 구할 수 있다.**

    - **이진 트리의 높이를 h라 할 때 포화 이진 트리의 노드는 2^(h) - 1로 구할 수 있다.**

2. 만들어진 포화 이진 트리가 유효한 트리인지 확인

    처음에는 이 문제를 해결하기 위해 홀수 번째 노드가 항상 부모 노드가 된다고 생각해 단순하게 접근하였지만 역시나 문제가 잘 풀리지 않았다. 

    이후 이진 트리의 구조가 이진 탐색의 방법을 적용하기에 적합하다는 접근 방법을 찾아 동일한 방법으로 문제를 해결할 수 있었다.


| **문자열을 굳이 배열로 만들지 않고 접근할 수 있다는 점에 주목하자.**