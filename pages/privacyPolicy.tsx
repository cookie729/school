import React from 'react';
import { Box, Divider, Stack, Text } from '@chakra-ui/react';

const PrivacyPolicy = () => {
  return (
    <>
      <Stack
        maxW='7xl'
        w={{ base: '90%', md: '80%' }}
        my={14}
        mx='auto'
        lineHeight={7}
      >
        <Text
          textAlign='center'
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight='bold'
          my={5}
        >
          プライバシーポリシー
        </Text>

        <Text textAlign='left' py={5}>
          株式会社リングテック（以下「当社」といいます。）は、当社がビューテックアカデミー（以下「本サービス」といいます。）を提供するにあたり、ご利用される皆様（以下「利用者」といいます。）の個人に関する情報（以下「個人情報」といいます。）を取得します。
        </Text>

        {/* 1項 */}
        <Box py={5}>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight='bold'>
            1. （適用範囲）
          </Text>
          <Divider my={1}></Divider>
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            　本プライバシーポリシー（以下「本ポリシー」といいます。）は、当社が利用者から個人情報を取得、利用及び管理するときに適用されます。
          </Text>
        </Box>

        {/* 2項 */}
        <Box py={5}>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight='bold'>
            2.（取得する情報）
          </Text>
          <Divider my={1}></Divider>
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            　当社は、利用者から以下の情報を取得します。
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }} pb={3} pl='.5em'>
            （1） 氏名
            <br />
            （2）住所
            <br />
            （3）生年月日
            <br />
            （4）年齢
            <br />
            （5）連絡先
            <br />
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （6）クレジットカード情報、銀行口座情報等の決済に関する情報
            </p>
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （7）情報通信端末の機体識別に関する情報
            </p>
            （8）IPアドレス
            <br />
          </Text>
        </Box>

        {/* 3項 */}
        <Box py={5}>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight='bold'>
            3. （利用目的）
          </Text>
          <Divider my={1}></Divider>
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            　当社が個人情報を収集・利用する目的は、以下のとおりです。
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }} pb={3} pl='.4em'>
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （1）本サービスの提供・運営のため
            </p>
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （2）本サービスの運営上必要な事項の通知のため
            </p>
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （3）本サービスの会員であるお客様の管理のため
            </p>
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （4）本サービスに関する新機能、更新情報をお知らせするため
            </p>
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （5）広告効果の分析、市場分析、マーケティングのため
            </p>
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （6）本サービスの各種問合せ、アフターサービス対応のため
            </p>
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （7）不正アクセス、不正利用の防止のため
            </p>
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （8）本サービスその他のコンテンツの開発・改善のため
            </p>
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （9）当社が実施するサービス又は企画に関する連絡のため
            </p>
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （10）上記の利用目的に付随する目的
            </p>
          </Text>
        </Box>

        {/* 4項 */}
        <Box py={5}>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight='bold'>
            4.（Cookieの利用）
          </Text>
          <Divider my={1}></Divider>
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            　当社は、ウェブサイト及び本サービス（以下、これらを総称して「ウェブサイト等」といいます。）のアクセス及び利用状況の分析、広告配信並びにウェブサイト等の利便性向上のために、ウェブサイト等にアクセスした利用者の情報通信端末に保存されるCookie等のファイル及びこれに類似する技術を取得することがあります。当社は、Cookie等と利用者の個人情報を関連付けることがあります。当社は、利用者の個人情報と関連付けたCookie等が利用者の個人情報であることに鑑み、当該Cookie等を本個人情報保護方針の定めに従って管理いたします。また、当社は、Cookie等の情報を第三者が運営するデータ・マネジメント・プラットフォームに提供し、当該第三者からCookie等により収集されたウェブの閲覧履歴及びその分析結果を取得し、これらを利用者の個人データと結び付けた上で、広告配信等の目的で利用することがあります。
          </Text>
        </Box>

        {/* 5項 */}
        <Box py={5}>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight='bold'>
            5.（安全確保の措置）
          </Text>
          <Divider my={1}></Divider>
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            　当社は、収集した情報の漏えい、滅失又はき損の防止その他収集した情報の適切な管理のために必要な措置を講じます。当社が、安全管理のために講じた措置の概要は以下のとおりです。措置の具体的内容については、本ポリシーで定める窓口に対する利用者からの求めに応じて遅滞なく回答いたします。
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }} pb={3} pl='.4em'>
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （1）基本方針の策定、個人情報の取扱いに係る規律の整備
            </p>
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （2）個人情報の取扱責任者や報告連絡体制の整備
            </p>
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （3）個人情報についての秘密保持に関する誓約を従業者から取得
            </p>
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （4）個人情報を取り扱うことのできる機器やアクセス権者を明確にし、個人情報への不要なアクセスを防止
            </p>
          </Text>
        </Box>

        {/* 6項 */}
        <Box py={5}>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight='bold'>
            6.（個人情報の第三者への提供）
          </Text>
          <Divider my={1}></Divider>
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            <p style={{ textIndent: '-1em', paddingLeft: '1em' }}>
              1.
              当社は、次に掲げる場合を除いて、あらかじめ利用者の同意を得ないで、取得した個人情報を第三者に提供することはありません。
            </p>
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }} pb={3} pl='.4em'>
            （1）法令に基づく場合
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （2）人の生命、身体又は財産の保護のために必要がある場合であって、利用者の同意を得ることが困難であるとき。
            </p>
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （3）公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、利用者の同意を得ることが困難であるとき。
            </p>
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （4）国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、利用者の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき。
            </p>
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            <p style={{ textIndent: '-1em', paddingLeft: '1em' }}>
              2.
              前項の定めにかかわらず、次に掲げる場合には、当該個人情報の提供先は第三者に該当しないものとします。
            </p>
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }} pb={3} pl='.4em'>
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （1）当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部又は一部を委託することに伴って当該個人情報が提供される場合
            </p>
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （2）合併その他の事由による事業の承継に伴って個人情報が提供される場合
            </p>
          </Text>
        </Box>

        {/* 7項 */}
        <Box py={5}>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight='bold'>
            7.（個人情報の共同利用）
          </Text>
          <Divider my={1}></Divider>
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            　当社は、特定の者との間で共同利用することを目的として個人情報を当該特定の者に提供することがあります。この場合、当社は、あらかじめ、共同して利用する個人情報の項目、共同して利用する者の範囲、利用する者の利用目的及び当該個人情報の管理について責任を有する者の氏名又は名称を公表するものとします。
          </Text>
        </Box>

        {/* 8項 */}
        <Box py={5}>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight='bold'>
            8. （本プライバシーポリシーの変更）
          </Text>
          <Divider my={1}></Divider>
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            　当社は、法令改正への対応の必要性及び事業上の必要性に応じて、本ポリシーを変更する場合があります。本ポリシーの変更を行った場合には、本ウェブサイト上に掲載します。
          </Text>
        </Box>

        {/* 9項 */}
        <Box py={5}>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight='bold'>
            9.（開示、訂正等の手続）
          </Text>
          <Divider my={1}></Divider>
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            <p style={{ textIndent: '-1em', paddingLeft: '1em' }}>
              1.
              利用者は、本条に従って、当社に対し以下の求め又は請求を行うことができます。
            </p>
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }} pb={3} pl='.4em'>
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （1）利用者から個人情報の利用目的の通知の求め
            </p>
            （2）利用者の個人情報の開示の請求
            <br />
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （3）当社が保有する利用者の個人情報の内容が事実でない場合における、当該内容の訂正、追加又は削除の請求
            </p>
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （4）利用者の個人情報が利用者に対して通知若しくは公表した利用目的の達成に必要な範囲を超えて取り扱われた場合又は当該個人情報が偽りその他不正の手段によって取得された場合における、当該個人情報の利用の停止又は消去の請求
            </p>
            <p style={{ textIndent: '-2.7em', paddingLeft: '2.7em' }}>
              （5）利用者の個人情報が個人情報保護法第23条第1項又は第24条の規定に違反して第三者に提供されている場合における、当該個人情報の第三者への提供の停止の請求
            </p>
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }} py={3}>
            <p style={{ textIndent: '-1em', paddingLeft: '1em' }}>
              2.
              前項の求め又は請求にあたっては、同項各号のうちいずれの請求か特定の上、本人確認のための書類（運転免許証、健康保険証、住民票の写し等）をご提出頂きます。
            </p>
          </Text>
        </Box>

        {/* 10項 */}
        <Box py={5}>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight='bold'>
            10. （お問い合わせ）
          </Text>
          <Divider my={1}></Divider>
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            　当社の個人情報の取扱いに関するご相談や苦情等のお問い合わせについては、下記の窓口にご連絡ください。
            <br />
            　個人情報取扱事業者の氏名又は名称、住所及び代表者の氏名については、ウェブサイトの会社概要をご参照頂く他、利用者の求めに応じて遅滞なく回答します。
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }} py={3}>
            Eメールアドレス：
          </Text>
        </Box>
      </Stack>
    </>
  );
};

export default PrivacyPolicy;
