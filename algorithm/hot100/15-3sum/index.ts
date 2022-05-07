// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
//
// 注意：答案中不可以包含重复的三元组。
//
//
//
// 示例 1：
//
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/3sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

export function threeSum(nums: number[]) {
  // 特判
  if (nums.length < 3) return [];

  const res: number[][] = [];

  // 先排序
  nums = nums.sort((o, t) => o - t);

  const n = nums.length;
  let L, R;

  for (let i = 0; i < n; i++) {
    const val = nums[i];

    // 排序后的值 后面的值加起来不可能得到0 直接退出
    if (val > 0) break;

    // 下面已经遍历过了 如果是同值 直接跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // 最左边i 然后L 向右运动  R 向左运动
    L = i + 1;
    R = n - 1;

    while (L < R) {
      const r = val + nums[L] + nums[R];
      if (r === 0) {
        res.push([val, nums[L], nums[R]]);

        // 向右遇到同值 继续向右运动
        while (L < R && nums[L] === nums[L + 1]) {
          L++;
        }
        // 向左运动遇到同值 继续向左
        while (L < R && nums[R] === nums[R - 1]) {
          R--;
        }

        // 向右
        L++;
        // 向左
        R--;
      } else if (r > 0) {
        // 左运动
        R--;
      } else {
        // 右运动
        L++;
      }
    }
  }

  return res;
}
