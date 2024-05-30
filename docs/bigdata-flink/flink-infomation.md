---
sidebar_position: 1
---
## 简介
Apache Flink是一个开源的流处理框架，具有强大的流处理和批处理功能。
Apache Flink是一个'框架'和'分布式'处理引擎，用于对'无界和有界数据流'进行'状态计算'。

### 什么是Apache Flink
Apache Flink是一个框架和分布式处理引擎，用于在无界和有界数据流上进行有状态计算。Flink被设计为可以在所有常见的集群环境中运行，以内存中的速度和任意规模执行计算。

### Flink核心
- 状态+时间(水位线) +事件驱动
  - 有状态:输入值+初始值=输出值
  - 无状态:输入值=输出值

## Flink主要特点

- 支持事件时间（event-time）和处理时间（processing-time）语义
- 精确一次（exactly-once）的状态一致性保证
- 低延迟，每秒处理数百万个事件，毫秒级延迟（实际上就是没有延迟）
- 与众多常用存储系统的连接（ES，HBase，MySQL，Redis⋯）
- 高可用（zookeeper），动态扩展，实现7*24小时全天候运行

## Flink vs Spark Streaming区别

