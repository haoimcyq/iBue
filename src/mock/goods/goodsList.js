import Mock from 'mockjs';
import { SUCCESS_CODE, SUCCESS_MSG } from '@/config/setting';
import { formatQuery } from '@/mock/formatQuery';

/** 接口前缀 */
const MOCK_PATH = '/goods/goodsList';
const Random = Mock.Random;

/** 创建列表数据 */
let dataList = (len => {
    let list = [];

    for (let i = 0; i < len; i++) {
        list.push(
            Mock.mock({
                id: '@id',
                image: require('@/assets/apple.png'),
                title: Random.csentence(),
                content: Random.csentence(),
                rate: Random.integer(2, 5),
                price: Random.integer(14160, 19500),
                sales: Random.integer(10, 100)
            })
        );
    }

    return list;
})(200);

/** 获取列表数据 */
Mock.mock(`${MOCK_PATH}/list`, 'get', opts => {
    console.log(opts)
    opts = formatQuery(opts.body);

    console.log(opts)

    let data = [],
        keyword = opts.keyword || '',
        pageSize = Number(opts.pageSize) || 20,
        currentPage = Number(opts.currentPage) || 1,
        total = dataList.length;

    if (keyword) {
        for (let item of dataList) {
            if (opts) {
                data.push(item);
            }
        }
    } else {
        data = dataList;
    }

    console.log(opts.pageSize, opts.currentPage)

    /** 分页 */
    data = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return {
        code: SUCCESS_CODE,
        message: SUCCESS_MSG,
        data,
        pageSize,
        currentPage,
        total
    };
});
