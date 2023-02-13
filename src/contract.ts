import {
  AdminFeeUpdated as AdminFeeUpdatedEvent,
  ERC20Permit as ERC20PermitEvent,
  LoanLiquidated as LoanLiquidatedEvent,
  LoanRenegotiated as LoanRenegotiatedEvent,
  LoanRepaid as LoanRepaidEvent,
  LoanStarted as LoanStartedEvent,
  MaximumLoanDurationUpdated as MaximumLoanDurationUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  Unpaused as UnpausedEvent
} from "../generated/Contract/Contract"
import {
  AdminFeeUpdated,
  ERC20Permit,
  LoanLiquidated,
  LoanRenegotiated,
  LoanRepaid,
  LoanStarted,
  MaximumLoanDurationUpdated,
  OwnershipTransferred,
  Paused,
  Unpaused
} from "../generated/schema"

export function handleAdminFeeUpdated(event: AdminFeeUpdatedEvent): void {
  let entity = new AdminFeeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newAdminFee = event.params.newAdminFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleERC20Permit(event: ERC20PermitEvent): void {
  let entity = new ERC20Permit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.erc20Contract = event.params.erc20Contract
  entity.isPermitted = event.params.isPermitted

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLoanLiquidated(event: LoanLiquidatedEvent): void {
  let entity = new LoanLiquidated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.loanId = event.params.loanId
  entity.borrower = event.params.borrower
  entity.lender = event.params.lender
  entity.loanPrincipalAmount = event.params.loanPrincipalAmount
  entity.nftCollateralId = event.params.nftCollateralId
  entity.loanMaturityDate = event.params.loanMaturityDate
  entity.loanLiquidationDate = event.params.loanLiquidationDate
  entity.nftCollateralContract = event.params.nftCollateralContract

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLoanRenegotiated(event: LoanRenegotiatedEvent): void {
  let entity = new LoanRenegotiated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.loanId = event.params.loanId
  entity.borrower = event.params.borrower
  entity.lender = event.params.lender
  entity.newLoanDuration = event.params.newLoanDuration
  entity.newMaximumRepaymentAmount = event.params.newMaximumRepaymentAmount
  entity.renegotiationFee = event.params.renegotiationFee
  entity.renegotiationAdminFee = event.params.renegotiationAdminFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLoanRepaid(event: LoanRepaidEvent): void {
  let entity = new LoanRepaid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.loanId = event.params.loanId
  entity.borrower = event.params.borrower
  entity.lender = event.params.lender
  entity.loanPrincipalAmount = event.params.loanPrincipalAmount
  entity.nftCollateralId = event.params.nftCollateralId
  entity.amountPaidToLender = event.params.amountPaidToLender
  entity.adminFee = event.params.adminFee
  entity.revenueShare = event.params.revenueShare
  entity.revenueSharePartner = event.params.revenueSharePartner
  entity.nftCollateralContract = event.params.nftCollateralContract
  entity.loanERC20Denomination = event.params.loanERC20Denomination

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLoanStarted(event: LoanStartedEvent): void {
  let entity = new LoanStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.loanId = event.params.loanId
  entity.borrower = event.params.borrower
  entity.lender = event.params.lender
  entity.loanTerms_loanPrincipalAmount =
    event.params.loanTerms.loanPrincipalAmount
  entity.loanTerms_maximumRepaymentAmount =
    event.params.loanTerms.maximumRepaymentAmount
  entity.loanTerms_nftCollateralId = event.params.loanTerms.nftCollateralId
  entity.loanTerms_loanERC20Denomination =
    event.params.loanTerms.loanERC20Denomination
  entity.loanTerms_loanDuration = event.params.loanTerms.loanDuration
  entity.loanTerms_loanInterestRateForDurationInBasisPoints =
    event.params.loanTerms.loanInterestRateForDurationInBasisPoints
  entity.loanTerms_loanAdminFeeInBasisPoints =
    event.params.loanTerms.loanAdminFeeInBasisPoints
  entity.loanTerms_nftCollateralWrapper =
    event.params.loanTerms.nftCollateralWrapper
  entity.loanTerms_loanStartTime = event.params.loanTerms.loanStartTime
  entity.loanTerms_nftCollateralContract =
    event.params.loanTerms.nftCollateralContract
  entity.loanTerms_borrower = event.params.loanTerms.borrower
  entity.loanExtras_revenueSharePartner =
    event.params.loanExtras.revenueSharePartner
  entity.loanExtras_revenueShareInBasisPoints =
    event.params.loanExtras.revenueShareInBasisPoints
  entity.loanExtras_referralFeeInBasisPoints =
    event.params.loanExtras.referralFeeInBasisPoints

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMaximumLoanDurationUpdated(
  event: MaximumLoanDurationUpdatedEvent
): void {
  let entity = new MaximumLoanDurationUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newMaximumLoanDuration = event.params.newMaximumLoanDuration

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
