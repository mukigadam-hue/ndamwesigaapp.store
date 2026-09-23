import inventoryImage from "@/assets/blog/inventory-systems.jpg";
import cashFlowImage from "@/assets/blog/cash-flow-global.jpg";
import customerImage from "@/assets/blog/customer-records-global.jpg";
import teamImage from "@/assets/blog/team-accountability-global.jpg";
import offlineImage from "@/assets/blog/offline-operations-global.jpg";

export type ArticleCategory = "Inventory" | "Finance" | "Customers" | "Team" | "Operations";
export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export interface ResourceArticle {
  slug: string;
  title: string;
  description: string;
  category: ArticleCategory;
  readTime: string;
  published: string;
  updated: string;
  image: string;
  imageAlt: string;
  intro: string;
  blocks: ArticleBlock[];
}

export const articles: ResourceArticle[] = [
  {
    slug: "inventory-management-for-small-business",
    title: "A Practical Inventory Management System for a Growing Small Business",
    description: "Learn how to organize stock, choose useful units, count reliably, reduce losses, and turn everyday inventory records into better purchasing decisions.",
    category: "Inventory",
    readTime: "10 min read",
    published: "September 22, 2026",
    updated: "September 22, 2026",
    image: inventoryImage,
    imageAlt: "Shop owner checking packaged inventory on organized shelves",
    intro: "Inventory management is not simply knowing how many products are in a room. It is a repeatable way to understand what came in, what went out, what was damaged, what customers are asking for, and what should be purchased next. A useful system must match the way the business actually sells—from individual pieces to cartons, sacks, litres, glasses, heaps, or other practical units.",
    blocks: [
      { type: "heading", text: "Begin with a stock map, not a shopping list" },
      { type: "paragraph", text: "Before entering products into any system, walk through the shop, store, workshop, or warehouse and divide stock into clear groups. A hardware shop might use electrical, plumbing, paint, and tools. A food seller might use beverages, dry goods, fresh produce, and household supplies. Categories should help a worker find and count an item; they should not be so broad that everything ends up together or so narrow that each category contains one product." },
      { type: "paragraph", text: "For every item, record a consistent name, category, quality or variation, purchase price, selling price, and unit. Consistency matters. If one worker enters “Blue soap,” another enters “soap blue,” and a third creates “Blue bar soap,” the business may accidentally treat one product as three. Agree on a naming pattern and search existing records before creating a new one. Product photos and barcodes make identification easier when names are similar." },
      { type: "heading", text: "Choose units that reflect how goods are bought and sold" },
      { type: "paragraph", text: "Many small businesses buy in bulk and sell in smaller portions. A carton may contain boxes, and each box may contain individual pieces. A sack of onions may be sold by casual heaps. A twenty-litre container may be sold by a small glass. The system should preserve the relationship between the purchased container and the selling unit. Without that relationship, a sale can look profitable while the remaining quantity becomes impossible to explain." },
      { type: "paragraph", text: "Start with the smallest unit the business can reasonably count or estimate. Then define how many of those units belong in a larger package. For measured or informal portions, establish a practical conversion and review it after several real sales. The goal is not laboratory precision. The goal is a stable business rule that lets the owner compare expected stock with what is physically available." },
      { type: "list", items: ["Use one standard item name and include quality only when it affects price or customer choice.", "Record both the buying package and the selling unit when they differ.", "Add a barcode for packaged products and a clear image for visually identified goods.", "Set a reorder point based on sales speed and supplier delivery time, not guesswork.", "Record waste, damage, personal use, and samples instead of silently reducing the quantity."] },
      { type: "heading", text: "Make receiving stock a controlled process" },
      { type: "paragraph", text: "Good records begin when stock arrives. Compare the supplier’s delivery with the purchase order or verbal agreement. Count the actual quantity, check quality, and record the real supplier price. If ten cartons were ordered but nine arrived, entering ten creates a shortage before a single sale occurs. If a supplier changes the package size, update the conversion rather than assuming the old quantity still applies." },
      { type: "paragraph", text: "Separate the date stock was ordered from the date it was received. This helps reveal suppliers who deliver slowly or incompletely. Keep purchase records connected to inventory so the owner can understand why stock increased and what it cost. A photograph of unusual or high-value stock can provide useful supporting evidence, but it should complement—not replace—a quantity and price record." },
      { type: "heading", text: "Count in small cycles instead of waiting for a crisis" },
      { type: "paragraph", text: "A full stocktake is valuable, but it can interrupt trading and become exhausting. Cycle counting is easier: count a manageable category or shelf on a regular schedule. Fast-moving and valuable items can be checked daily or weekly, while slow-moving items can be checked monthly. Compare the physical count with the expected balance and investigate meaningful differences while the events are still fresh." },
      { type: "paragraph", text: "A difference does not automatically prove theft. It may come from an unrecorded sale, a wrong conversion, damaged goods, a duplicate product, an incorrect opening balance, or a simple counting mistake. Correct the record only after noting the reason. Over time, recurring explanations expose the process that needs attention. For example, repeated shortages in one category may show that workers are selling smaller units without recording the correct package conversion." },
      { type: "heading", text: "Use stock information to make purchasing decisions" },
      { type: "paragraph", text: "The purpose of accurate inventory is action. Review which items sell quickly, which stay too long, and which run out before customers can buy them. A high quantity is not always healthy: slow stock ties up cash that could pay suppliers, wages, or rent. At the same time, buying too little of a reliable seller can create lost sales and disappointed customers." },
      { type: "paragraph", text: "Combine sales history with practical knowledge. Seasonal demand, market days, school terms, weather, and supplier delays may change the next order. Set a minimum level that allows the business to continue until replacement stock arrives. When cash is limited, prioritize products with dependable demand and understood margins rather than expanding the catalogue without evidence." },
      { type: "heading", text: "Build a routine people can actually follow" },
      { type: "paragraph", text: "The best inventory system is the one workers use during busy periods. Keep required fields focused, assign responsibility for receiving and adjustments, and train everyone to search before adding. Review exceptions rather than manually rechecking every normal transaction. Protect important records with appropriate access, and use a recycle or recovery process for accidental deletions where available." },
      { type: "paragraph", text: "BizTrack brings stock, purchases, sales, barcodes, images, packaging units, and waste records into the same operating flow. That connection is useful because each stock movement has a business reason. Begin with one category, clean the names and units, enter an opening count, and operate it consistently for a week. Once the numbers are understandable, repeat the process for the next category. Reliable inventory grows through steady habits, not one perfect setup day." }
    ]
  },
  {
    slug: "small-business-cash-flow-management",
    title: "Small Business Cash Flow: From Daily Sales to Money You Can Explain",
    description: "A practical guide to separating sales, cash collected, expenses, purchases, and customer debt so daily business decisions rest on clear records.",
    category: "Finance",
    readTime: "11 min read",
    published: "September 22, 2026",
    updated: "September 22, 2026",
    image: cashFlowImage,
    imageAlt: "East Asian business owner reconciling a cash drawer with receipts and a laptop",
    intro: "A busy day can feel successful while cash remains tight. That happens because sales, profit, and available cash are related but different. Some sales are unpaid, some cash pays for stock, and some expenses happen before revenue arrives. Cash-flow management gives each movement a name and a date so an owner can explain the money available today.",
    blocks: [
      { type: "heading", text: "Understand the four numbers that are often mixed together" },
      { type: "paragraph", text: "Sales revenue is the value of goods or services sold. Cash collected is the amount customers actually paid. Purchases are amounts spent acquiring stock or production inputs. Expenses are other operating costs such as transport, rent, utilities, repairs, or wages. A credit sale can increase revenue without increasing cash, while collecting an old debt increases cash without creating a new sale. Keeping these events separate prevents confident but incorrect decisions." },
      { type: "paragraph", text: "Profit also differs from cash. A business may sell profitable goods on credit and still lack money to pay a supplier today. It may receive a large customer payment that settles an old balance but does not represent today’s profit. This is why a daily view should show sales, amounts collected, purchases, expenses, and debt repayments separately before presenting a practical cash position." },
      { type: "heading", text: "Record transactions when they happen" },
      { type: "paragraph", text: "Memory becomes unreliable as the day gets busy. Record each sale at the point of service, identify whether it is fully paid, partly paid, or unpaid, and issue a receipt when appropriate. Record expenses when money leaves and purchases when stock arrives or the supplier obligation is created. Delayed entry encourages missing transactions, duplicate records, and unexplained differences at closing." },
      { type: "list", items: ["Record the full sale value and the amount paid as separate figures.", "Keep the remaining customer balance visible after every partial payment.", "Classify purchases separately from operating expenses.", "Record the payment method so cash, bank, and mobile money can be reconciled.", "Attach a clear note to corrections rather than deleting unexplained differences."] },
      { type: "heading", text: "Treat customer debt as a managed promise" },
      { type: "paragraph", text: "Credit can help trusted customers and increase sales, but informal debt quickly becomes invisible. Record the customer, transaction date, total amount, amount received, remaining balance, and an agreed follow-up date. When a customer pays part of the balance, enter only the new payment. The system should preserve the original sale and calculate what remains instead of asking the worker to rewrite the entire amount." },
      { type: "paragraph", text: "Review overdue balances on a schedule. Contact customers respectfully with the exact invoice or receipt information and acknowledge every payment. Avoid extending more credit simply because a customer is familiar; use their payment history and the business’s available cash. A debt is not collected cash, so do not use it to justify spending until payment actually arrives." },
      { type: "heading", text: "Close the day with a cash reconciliation" },
      { type: "paragraph", text: "At the end of the trading day, count the physical money in the drawer and compare it with the expected cash. A practical calculation begins with opening cash, adds cash sales and debt repayments, then subtracts cash purchases, expenses, refunds, and withdrawals. Mobile money and bank collections should be checked in their own channels because they are not physically in the drawer." },
      { type: "paragraph", text: "When actual cash differs from expected cash, record the variance and investigate it. Look for change given incorrectly, a transaction recorded under the wrong payment method, an expense paid but not entered, a duplicated sale, or cash removed for another purpose. Small differences deserve attention because repeated small gaps become large losses. The objective is not blame; it is finding the broken step while the team can still remember the day." },
      { type: "heading", text: "Plan cash before committing it" },
      { type: "paragraph", text: "Create a simple forward view of expected collections and required payments. Start with obligations that keep the business operating: essential stock, wages, rent, taxes, utilities, and agreed supplier payments. Add realistic customer collections based on due dates and payment behavior, not hope. If expected outflows exceed available cash, act early by reducing discretionary purchases, following up debts, negotiating timing, or prioritizing faster-moving inventory." },
      { type: "paragraph", text: "Keep personal withdrawals visible. Owners often take money for household needs without recording it because they consider the business theirs. The ownership is real, but the missing record makes the operating result misleading. Treat an owner withdrawal as its own transaction so business expenses remain accurate and future decisions use honest figures." },
      { type: "heading", text: "Review trends, not just today’s balance" },
      { type: "paragraph", text: "A single day may be unusual. Compare weekly and monthly patterns: cash collected, outstanding debt, purchase levels, operating expenses, and products or services contributing the most. Watch for sales growing while collections weaken, expenses rising faster than revenue, or stock purchases absorbing cash without producing sales. These relationships give the owner time to respond before a shortage becomes an emergency." },
      { type: "paragraph", text: "BizTrack connects sales, service payments, purchases, expenses, debts, repayments, receipts, and accountability records. Use those connections to establish a short closing routine: finish transaction entries, review unpaid balances, count each payment channel, record the actual drawer amount, and investigate the difference. Ten disciplined minutes at the end of a day can create a far clearer foundation for tomorrow’s decisions." }
    ]
  },
  {
    slug: "customer-records-repeat-sales",
    title: "Customer Records That Support Better Service and Repeat Sales",
    description: "Build a useful customer directory from real transactions, protect customer trust, follow up debt clearly, and turn purchase history into better service.",
    category: "Customers",
    readTime: "10 min read",
    published: "September 22, 2026",
    updated: "September 22, 2026",
    image: customerImage,
    imageAlt: "Latino shopkeeper helping a returning customer while using a tablet",
    intro: "A customer list becomes valuable when it helps the business serve people consistently. Names and phone numbers alone are not a customer relationship system. Useful records connect a person or organization to purchases, payments, preferences, and agreed follow-ups while collecting only information the business genuinely needs.",
    blocks: [
      { type: "heading", text: "Create one dependable record for each customer" },
      { type: "paragraph", text: "Duplicate names weaken customer history. Before creating a new record, search for similar names and confirm with a phone number, business name, or another appropriate detail. Use a consistent naming format and include the country code in phone numbers so contact information remains useful across devices and borders. When the customer is another business, record its trading name and business identifier separately from the contact person." },
      { type: "paragraph", text: "Do not collect information simply because a form allows it. Ask for what supports the transaction, delivery, receipt, account recovery, or an agreed relationship. Explain why contact information is needed and obtain consent before using it for marketing. Good records should increase trust, not make a customer feel watched." },
      { type: "heading", text: "Let transactions build the history" },
      { type: "paragraph", text: "A customer profile is most reliable when its history comes from actual sales and services. Each completed transaction should show the date, items or service, total, payment status, and receipt reference. A worker can then recognize a returning customer, understand what they usually purchase, and answer questions without searching through paper books or relying on one person’s memory." },
      { type: "paragraph", text: "History can reveal useful patterns without complicated analysis. A restaurant may reorder the same supplies every week. A repair customer may return for related parts. A retailer may consistently buy a particular quality or package size. Use these patterns to prepare stock and offer relevant service, but avoid assuming that a previous purchase guarantees future interest." },
      { type: "list", items: ["Search existing names before adding a customer.", "Connect every sale, service, and payment to the correct record.", "Keep consent and the purpose of contact information clear.", "Use history to improve service, not to pressure customers.", "Correct outdated details while preserving the transaction record."] },
      { type: "heading", text: "Make debt conversations specific and respectful" },
      { type: "paragraph", text: "Customer debt is easier to manage when both sides can refer to the same details. Keep the original amount, payments made, remaining balance, dates, and receipt or order reference together. When following up, state the transaction and balance calmly. Avoid vague messages such as “you still owe us” when a precise record can prevent disagreement." },
      { type: "paragraph", text: "Partial payments should add to the history rather than overwrite it. This protects the customer and the business because every payment remains visible. If a balance is disputed, review the underlying items, quantities, and previous receipts. Accurate records turn an emotional conversation into a practical review." },
      { type: "heading", text: "Use follow-up to create value" },
      { type: "paragraph", text: "Follow-up is not only promotion. It can confirm an order, advise that stock has arrived, provide a receipt, check whether a service solved the problem, or remind a customer about an agreed payment date. Contact should have a clear purpose. Frequent messages without value train customers to ignore the business and may damage trust." },
      { type: "paragraph", text: "Segment contacts using facts that matter to service: customer or supplier, location, business category, purchase pattern, or active order. A small set of meaningful groups is better than dozens of labels no one maintains. Review groups periodically because a one-time buyer may become a regular customer and a former supplier may no longer be active." },
      { type: "heading", text: "Strengthen business-to-business relationships" },
      { type: "paragraph", text: "When businesses discover and order from one another, clear identity reduces mistakes. A unique business code can help the correct organizations connect without exposing personal details. Public business information should focus on what the business offers, its location, current activity, and the contact details the owner has chosen to share. Product images and accurate stock descriptions make a profile more useful to potential buyers." },
      { type: "paragraph", text: "Track the relationship as a sequence of useful interactions: enquiries, orders, fulfilment, disputes, payments, and repeat purchases. A relationship should not be judged only by total revenue. Reliability, payment behavior, fulfilment quality, and communication all matter when deciding how to work together again." },
      { type: "heading", text: "Protect access and review quality" },
      { type: "paragraph", text: "Customer records may contain phone numbers, balances, and transaction histories. Give workers only the access required for their role, keep account credentials private, and remove access when responsibilities change. Do not export or share customer lists casually. If information is no longer needed, follow the business’s retention and privacy practices." },
      { type: "paragraph", text: "BizTrack can connect customers to sales, services, receipts, debts, repayments, orders, and business discovery. Begin by cleaning duplicate names and completing the records of active customers. Then use the history during real conversations: recognize a repeat purchase, confirm a balance, or prepare an expected order. A customer system earns its place when it helps the team give accurate, respectful service every day." }
    ]
  },
  {
    slug: "team-accountability-small-business",
    title: "Team Accountability Without Slowing Down Daily Business",
    description: "Set clear roles, create useful daily records, review performance fairly, and protect sensitive business information as your team grows.",
    category: "Team",
    readTime: "10 min read",
    published: "September 22, 2026",
    updated: "September 22, 2026",
    image: teamImage,
    imageAlt: "Diverse small business team reviewing daily operations together",
    intro: "Accountability works when people know what they are responsible for, can record their work quickly, and receive fair follow-up. It should not mean watching every movement or creating paperwork that competes with customers. A strong system connects permissions, transaction records, daily review, and respectful management.",
    blocks: [
      { type: "heading", text: "Define responsibility before measuring performance" },
      { type: "paragraph", text: "Start by describing each role in practical terms. Who may receive stock? Who can change prices? Who records expenses? Who approves credit? Who closes the cash drawer? Titles such as manager or assistant are not enough if two people interpret them differently. Write down the decisions each role can make, the records it must create, and the situations that require approval." },
      { type: "paragraph", text: "Match digital access to those responsibilities. An owner may need financial summaries and account settings, while a cashier may need sales, customer balances, and receipts without access to overall profit. Permissions reduce accidental changes and protect sensitive information. They also protect workers from being blamed for actions they were never authorized to perform." },
      { type: "heading", text: "Record work as part of the task" },
      { type: "paragraph", text: "A separate report written hours later is likely to miss details. Build recording into the action: a sale creates a sales record, receiving goods creates a purchase or stock movement, and a customer payment updates the balance. The worker’s identity and time can be attached automatically. This produces a more reliable activity history than asking everyone to reconstruct the day from memory." },
      { type: "paragraph", text: "Group a worker’s daily activity into a readable thread rather than presenting dozens of disconnected lines. A manager should be able to open one person’s day, review the sequence, and understand totals and exceptions. If records need deletion, give that ability only to an authorized owner or administrator and preserve a clear process for handling mistakes." },
      { type: "list", items: ["Define who records, reviews, approves, and corrects each type of activity.", "Give each worker an individual account; never share passwords.", "Keep routine entry short enough to complete while serving customers.", "Review exceptions and unusual changes instead of treating every worker as suspicious.", "Remove access promptly when a worker leaves or changes responsibility."] },
      { type: "heading", text: "Use daily review to solve problems early" },
      { type: "paragraph", text: "A short daily review is more useful than a long investigation at month-end. Compare sales and collections, check unusual discounts or cancellations, review stock adjustments, and reconcile cash. Ask about differences while events are fresh. A worker may remember that a customer changed payment method or that damaged stock was moved aside; weeks later, the same difference is much harder to explain." },
      { type: "paragraph", text: "Separate errors from misconduct. Training, unclear units, duplicate items, unstable connectivity, or a confusing process can create bad records without dishonest intent. Look for patterns and supporting evidence. Correct the process first when several people make the same mistake. Escalate deliberate or repeated violations through a documented and fair procedure." },
      { type: "heading", text: "Measure outcomes people can influence" },
      { type: "paragraph", text: "Performance should not be reduced to sales value. A worker may serve a quiet shift, handle difficult stock work, collect old debts, resolve customer problems, or maintain accurate records. Combine activity measures with quality measures: transaction accuracy, fulfilment time, customer issues, stock variance, attendance, and completion of assigned responsibilities." },
      { type: "paragraph", text: "Discuss measures openly so workers know what good performance means. Avoid rankings built from incomplete data. Compare similar roles and shifts, and consider conditions outside the worker’s control. Metrics should guide coaching and recognition, not create fear or encourage staff to manipulate numbers." },
      { type: "heading", text: "Connect compensation records to clear agreements" },
      { type: "paragraph", text: "Keep salary frequency, agreed amount, advances, and payments organized. An advance should not disappear into memory; record the date, purpose where appropriate, and how it will be recovered. Confirm each payment and remaining obligation. Clear payroll records protect the worker from underpayment and help the owner plan future cash needs." },
      { type: "paragraph", text: "Restrict payroll details to people with a genuine need to see them. Do not mix public performance discussions with private compensation information. When terms change, record the new agreement and effective date rather than editing history as though the previous arrangement never existed." },
      { type: "heading", text: "Create a culture of visible improvement" },
      { type: "paragraph", text: "Accountability becomes sustainable when review leads to action. If stock differences come from unclear packaging, fix the units. If receipts are missing because the process is slow, simplify it. If one worker needs coaching, agree on a specific next step and review it later. Recognize accurate work and responsible reporting, including when someone reports their own mistake early." },
      { type: "paragraph", text: "BizTrack supports role-based access, worker activity, transaction histories, accountability reviews, and worker payment records. Introduce these tools with a clear conversation: what is recorded, why it matters, who can see it, and how corrections are handled. The objective is a business that can explain its work and improve it—not surveillance. When the system is fair and easy to use, accountability supports both trust and growth." }
    ]
  },
  {
    slug: "offline-business-records-guide",
    title: "How to Keep Business Records Moving When the Internet Is Unreliable",
    description: "Prepare your team for weak connections with offline-first routines, safe syncing, clear status checks, and practical recovery steps.",
    category: "Operations",
    readTime: "9 min read",
    published: "September 22, 2026",
    updated: "September 22, 2026",
    image: offlineImage,
    imageAlt: "South Asian market trader recording a transaction on a phone",
    intro: "An unreliable connection should not force a business back to memory and loose paper. Offline-first work allows essential records to be captured on the device and synchronized when connectivity returns. It is not the same as pretending the internet never matters: teams still need clear status signals, safe devices, and a routine for confirming that queued work reached the shared account.",
    blocks: [
      { type: "heading", text: "Decide what must continue offline" },
      { type: "paragraph", text: "List the activities that cannot wait for connectivity. For many businesses these include recording sales, updating stock, noting expenses, capturing purchases, and preparing customer receipts. Activities that require fresh information from another business or a remote service may need to wait. Designing around real priorities prevents workers from assuming every screen behaves the same way without a connection." },
      { type: "paragraph", text: "Train the team to notice the connection indicator and any queued-record status. A saved-on-device confirmation means the work has been preserved locally; a synchronized confirmation means it has reached the shared online record. These are both useful states, but they are not identical. Clear language helps workers avoid entering the same transaction again because they did not see it on another device immediately." },
      { type: "heading", text: "Create records completely the first time" },
      { type: "paragraph", text: "Offline corrections can be harder when several devices are changing related information. Capture the customer, item, quantity, payment status, and relevant note before saving. Search locally cached items before creating new products. If an image is useful, compress it so the record can synchronize without consuming excessive data or memory when the connection returns." },
      { type: "paragraph", text: "Use stable device time and avoid changing the clock manually. Timestamps help order activities during synchronization and later review. If a worker knows a transaction is unusual—such as a large discount, stock adjustment, or cancellation—include a short explanation immediately. Context saved with the record is more reliable than a later verbal account." },
      { type: "list", items: ["Keep the device charged and use a screen lock known only to the authorized worker.", "Confirm that essential stock and customer lists were available before entering a low-connectivity area.", "Do not repeatedly submit an action while it shows as queued.", "Reconnect periodically and leave the app open long enough to finish synchronization.", "Review failed or conflicting records before clearing local app data or uninstalling."] },
      { type: "heading", text: "Understand the synchronization queue" },
      { type: "paragraph", text: "An offline queue stores pending actions in order and retries them when the network returns. This supports continuity, but it needs safeguards against duplicate submission and partial completion. The interface should show when work is waiting and notify the user when synchronization succeeds or needs attention. Optimistic updates can display the new record immediately while preserving its pending state behind the scenes." },
      { type: "paragraph", text: "Do not assume that a network icon alone proves synchronization. A phone may connect to a weak hotspot without reaching the service. Confirm through the application’s queue or sync status. If a record fails, preserve it with the reason and offer a retry rather than silently discarding it. For important transactions, compare the final shared record after connectivity stabilizes." },
      { type: "heading", text: "Plan for two people editing related information" },
      { type: "paragraph", text: "Conflicts can happen when two devices sell the same low-stock item while both are offline. A practical operating rule is as important as the software. Assign devices to locations, workers, tills, or stock areas where possible. For scarce or high-value products, use a manual reservation process during a long outage and reconcile as soon as one device reconnects." },
      { type: "paragraph", text: "When records conflict, investigate before forcing one version over another. Both sales may be real even if the shared stock becomes negative. Preserve the transactions, correct the stock count, and record the reason. Deleting one side merely to make the balance look tidy can remove a genuine customer or cash record." },
      { type: "heading", text: "Protect the local device" },
      { type: "paragraph", text: "Offline data lives on the phone, tablet, or computer until it synchronizes, so device security matters. Use individual accounts, screen locks, current system updates, and careful control of who can clear storage. Avoid shared personal devices when they contain sensitive customer or financial data. Sign out or remove access when a worker leaves, but first confirm that pending records have synchronized." },
      { type: "paragraph", text: "Uninstalling an app or clearing browser data can remove unsynchronized local records. Synced cloud records should return after the authorized user signs in on a new installation or device, while purely local pending work may not. Make synchronization part of the handover process before replacing, resetting, or repairing a device." },
      { type: "heading", text: "Practice recovery before it is urgent" },
      { type: "paragraph", text: "Test the workflow deliberately: disconnect one device, record a small sample transaction, reconnect, and confirm the shared result. Teach workers what each status looks like and who to contact if it does not clear. Repeat the test after major app or device changes. A short practice reveals misunderstandings without putting a real day’s records at risk." },
      { type: "paragraph", text: "BizTrack is designed to queue supported business records locally and synchronize them when connectivity returns. Use that capability with disciplined routines: capture complete information, watch pending status, avoid duplicate entry, reconnect regularly, and verify important totals. Offline-first operation is most powerful when the team understands both what the device has saved and what the wider business can already see." }
    ]
  }
];

export const articleCategories: ArticleCategory[] = ["Inventory", "Finance", "Customers", "Team", "Operations"];

export function getArticle(slug: string | undefined) {
  return articles.find((article) => article.slug === slug);
}
