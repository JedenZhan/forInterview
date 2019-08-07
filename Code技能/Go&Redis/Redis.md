# 数据类型

string(字符串), hash(哈希), list(列表), set(集合) 和 zset(有序集合)

## String

```shell
> SET name 'JedenZhan'
OK
> GET name
'JedenZhan'
```

## Hash

```shell
> DEL 'JedenZhan'
> HMSET name  field1 'Hello' field2 'World'
> HGET name field1
'Hello'
..
```

## List

```shell
> DEL name
> lpush name redis
int 1
> lpush name mongodb
int 2
> lpush name rabitmq
> lrange runoob 0 10
1) 'redis'
2) 'mongodb'
3) 'rabitmq'
```

## Set

```shell
> DEL name
> sadd name redis
> sadd name mongodb
...

> smembers name
1) 'redis'
2) 'mongodb'
3) 'rabitmq'
```

## Zset

```
> DEL name
> zadd name 0 redis
> zadd name 0 mongodb
> zadd name 0 rabitmq
```



