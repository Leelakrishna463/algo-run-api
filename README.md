# algo-run-api
API to handle search and sort Algorithms

[Visit Project](https://algo-run-api.herokuapp.com/)

## Endpoints
Supported Endpoints

 # Get supported Search endpoints
 ```sh
 /GET /search
 ```
 
 # Get supported Sort endpoints
 ```sh
 /GET /sort
 ```
 
 # Linear Search endpoint
```sh
/GET /linearsearch
```
  - provides as response description of linearsearch

```sh
/POST /linearsearch
```
   - given a json as request body as follows returns the index of the searchElement if present else -1
```sh
{
  "array" : [2,3,41,2,5],
  "searchElement" : 41
}
```

# Binary Search Endpoint

```sh
/GET /binarysearch
```
  - provides as response description of binarysearch
```sh
/POST /binarysearch
```
   - given a json as request body as follows with the array need to be sorted returns the index of the searchElement if present else -1
```sh
{
  "array" : [2,3,4,5,6],
  "searchElement" : 4
}
```


# Selection Sort Endpoint

```sh
/GET /selectionsort
```
  - provides as response description of selectionsort

```sh
/POST /selectionsort
```
   - given a json as request body returns sorted array
```sh
{
  "array" : [5,4,3,2,1],
}
```


# Bubble Sort Endpoint

```sh
/GET /bubblesort
```
  - provides as response description of bubblesort

```sh
/POST /bubblesort
```
   - given a json as request body returns sorted array
```sh
{
  "array" : [5,4,3,2,1],
}
```


# Insertion Sort Endpoint

```sh
/GET /insertionsort
```
  - provides as response description of insertion sort

```sh
/POST /insertionsort
```
   - given a json as request body returns sorted array
```sh
{
  "array" : [5,4,3,2,1],
}
```



# Merge Sort Endpoint

```sh
/GET /mergesort
```
  - provides as response description of mergesort
```sh
/POST /mergesort
```
   - given a json as request body returns sorted array
```sh
{
  "array" : [5,4,3,2,1],
}
```


# Quick Sort Endpoint

```sh
/GET /quicksort
```
  - provides as response description of quicksort

```sh
/POST /quicksort
```
   - given a json as request body returns sorted array
```sh
{
  "array" : [5,4,3,2,1],
}
```


